import React from "react";

const OutlineButton = ({ width, height, action, title }) => {
  return (
    <button
      className="outline-button"
      onClick={() => {
        if (action) {
          action();
        }
      }}
    >
      <p>{title}</p>
    </button>
  );
};

export default OutlineButton;
