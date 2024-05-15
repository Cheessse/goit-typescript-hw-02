import React from "react";
import css from "./ImageCard.module.css";

type ImageCardProps = {
  image: {
    urls: {
      small: string;
      alt_description: string;
    };
  };
  onClick: () => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={css.container}>
      <img src={image.urls.small} alt={image.urls.alt_description} className={css.image} onClick={onClick} width="320" height="200" />
    </div>
  );
};

export default ImageCard;
