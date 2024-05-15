import React from "react";
import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
  disabled?: boolean;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, disabled = false }) => {
  return (
    <button className={css.button} onClick={onClick} disabled={disabled}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
