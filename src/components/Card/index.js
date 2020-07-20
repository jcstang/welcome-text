import React, { useState } from "react";
import "./index.css";
import facts from "../../utils/facts";

let positionInList = 0;

export default function Card() {
  const [title, setTitle] = useState(facts.factsList[0].title);
  const [cardDescription, setCardDescription] = useState(
    facts.factsList[0].description
  );
  const [cardLink, setCardLink] = useState(facts.factsList[0].link);

  const nextButtonClicked = (event) => {
    event.preventDefault();
    positionInList++;

    if (positionInList < facts.factsList.length) {
      setTitle(facts.getCurrentCard(positionInList).title);
      setCardDescription(facts.getCurrentCard(positionInList).description);
      setCardLink(facts.getCurrentCard(positionInList).link);
    } else {
      console.log("ran out of questions");
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
