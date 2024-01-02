import React from "react";

export const FlashCard = ({ id, question, answer, open, handleQuesStatus }) => {
  return (
    <div
      className={open ? "selected" : ""}
      onClick={() => {
        handleQuesStatus(id);
      }}
    >
      {!open ? question : answer}
    </div>
  );
};
