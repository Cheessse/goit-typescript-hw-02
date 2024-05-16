import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages, ImageData } from "./api/images";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<ImageData[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [isError, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  useEffect(() => {
    if (!query) return;
    const load = async () => {
      try {
        setLoading(true);
        const { results, total } = await fetchImages({ query, pageNumber: page });
        if (total === 0) {
          toast.error("Please enter the correct search value.");
        }
        setImages((prev) => [...prev, ...results]);
        setTotalResults(total);
      } catch (error) {
        setError("Error fetching images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [query, page]);

  const handleSubmit = (query: string) => {
    setImages([]);
    setTotalResults(0);
    setError(null);
    setPage(1);
    setLoading(false);
    setQuery(query);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const modalOpen = (image: any) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const modalClose = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage ErrorMessage={isError} />}
      <ImageGallery images={images} onImageClick={modalOpen} />
      {totalResults > 0 && images.length < totalResults && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal images={selectedImage} isOpen={isOpen} onRequestClose={modalClose} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
