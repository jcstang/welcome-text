import React, { useState } from "react";
import "./index.css";

const listOfQuestions = [
  {
    title: "Hi",
    description: "some stuff",
    link: "",
  },
  {
    title: "Hi2",
    description: "some stuff",
    link: "",
  },
  {
    title: "Hi3",
    description: "some stuff",
    link: "",
  },
  {
    title: "Hi4",
    description: "some stuff",
    link: "",
  },
];

let mainIndex = 0;

export default function Card() {
  const [title, setTitle] = useState(getCurrentCard().title);
  const [cardText, setCardText] = useState(getCurrentCard().description);
  const [cardLink, setCardLink] = useState(getCurrentCard().link);

  const goToNextCard = () => {
    if (mainIndex === 0) {
      return listOfQuestions[mainIndex];
    }

    return listOfQuestions[mainIndex++];
  };

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{cardText}</p>
        <a href={cardLink} class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

const getCurrentCard = () => {
  return {
    title: "Card Text",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    link: "",
  };
};
