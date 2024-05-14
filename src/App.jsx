import { useEffect, useState, } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './api/images.js';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import Loader from './components/Loader/Loader.jsx'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx'
import ImageModal from './components/ImageModal/ImageModal.jsx';


function App() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [isError, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const load = async () => {
      try {
        setLoading(true)
        const { results, total } = await fetchImages(query, page);
            if (total === 0) {
              toast.error("Please enter the correct search value.")
            }
        setImages(prev => [...prev, ...results])
        setTotalResults(total)
      } catch (error) {
        setError('Error fetching images. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    load();
  }, [query, page])

  const handleSubmit = (query) => {
    setImages([])
    setTotalResults(0)
    setError(null)
    setPage(1)
    setLoading(false)
    setQuery(query)
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  const modalOpen = (image) => {
    setIsOpen(true)
    setSelectedImage(image)
  }

  console.log(selectedImage)
  console.log(isOpen)



    const modalClose = () => {
      setIsOpen(false)
      setSelectedImage(null)
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage ErrorMessage={isError} />}
      <ImageGallery images={images} onImageClick={modalOpen} />
      {(totalResults > 0 && images.length < totalResults) && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        images={selectedImage}
        isOpen={isOpen}
        onRequestClose={modalClose}
      />
            <Toaster
            position="top-right"
            reverseOrder={false}
            />
    </>
  )
}

export default App
