import React from "react";

type ErrorMessageProps = {
  ErrorMessage: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ ErrorMessage }) => {
  const errorStyle: React.CSSProperties = {
    margin: "auto",
  };

  return (
    <div style={errorStyle}>
      <p>{ErrorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
