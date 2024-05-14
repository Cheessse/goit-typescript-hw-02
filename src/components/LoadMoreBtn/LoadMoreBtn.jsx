import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, disabled }) => {
  return (
    <button className={css.button} onClick={onClick} disabled={disabled}>
      Load More
    </button>
  );
};

export default LoadMoreBtn