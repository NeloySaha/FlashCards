import React, { useState } from "react";
import { FlashCard } from "./FlashCard";

export const FlashCards = () => {
  const [questions, setQuestions] = useState([
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
      open: false,
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
      open: false,
    },
    {
      id: 8832,
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
      open: false,
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
      open: false,
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
      open: false,
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
      open: false,
    },
  ]);

  const handleQuesStatus = (i) => {
    setQuestions((prev) => {
      const newQuestions = prev.map((obj) =>
        obj.id === i ? { ...obj, open: !obj.open } : { ...obj, open: false }
      );

      return newQuestions;
    });
  };

  const cards = questions.map((quesObj) => {
    const props = {
      ...quesObj,
      handleQuesStatus,
    };
    return <FlashCard key={quesObj.id} {...props} />;
  });
  return <div className="flashcards">{cards}</div>;
};
