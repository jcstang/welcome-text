import React, { useState } from "react";
import "./index.css";
import quiz from "./questions";

let positionInList = 0;

export default function Card() {
  const [title, setTitle] = useState(quiz.questionList[0].title);
  const [cardDescription, setCardDescription] = useState(
    quiz.questionList[0].description
  );
  const [cardLink, setCardLink] = useState(quiz.questionList[0].link);

  const nextButtonClicked = (event) => {
    event.preventDefault();
    positionInList++;

    if (positionInList < quiz.questionList.length) {
      setTitle(quiz.getCurrentCard(positionInList).title);
      setCardDescription(quiz.getCurrentCard(positionInList).description);
      setCardLink(quiz.getCurrentCard(positionInList).link);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{cardDescription}</p>
        <a
          href={cardLink}
          className="btn btn-primary"
          onClick={nextButtonClicked}
        >
          Next <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
