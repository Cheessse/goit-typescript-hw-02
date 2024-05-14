import { useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, onImageClick }) => {

    useEffect(() => {
        window.scrollBy({
          top: 800,
          left: 0,
          behavior: "smooth"
        });
    }, [images]); 
  
    return (
      <ul className={css.imageGallery}>
        { images.map((image) => (
            <li key={image.id}>
            <ImageCard
              image={image}
              onClick={() => onImageClick(image)} />
            </li>
          ))}
      </ul>
    )
}

export default ImageGallery