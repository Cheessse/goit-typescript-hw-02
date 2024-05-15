import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  images: { urls: { regular: string; alt_description: string } };
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
  },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ images, isOpen, onRequestClose }) => {
  if (!images) {
    return null;
  }

  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.imageModal}
      overlayClassName={css.overlay}
      contentLabel="Image Modal"
    >
      <img src={images.urls.regular} alt={images.urls.alt_description} />
    </Modal>
  );
};

export default ImageModal;
