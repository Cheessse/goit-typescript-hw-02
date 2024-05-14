import Modal from 'react-modal';
import css from './ImageModal.module.css'

const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 'none',
    },
};

Modal.setAppElement('#root');

const ImageModal = ({ images, isOpen, onRequestClose }) => {

        if (!images) {
        return null
    }

    return (
    <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={css.imageModal}
        overlayClassName={css.overlay}
        contentLabel="Image Modal"
        appElement={document.getElementById("root")}
    >
        <img src={images.urls.regular} alt={images.urls.alt_description} />
    </Modal>
    );
};

export default ImageModal;