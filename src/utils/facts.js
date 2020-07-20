// ***************************************************************************
// facts.js
// This is the source of the questions from the quiz.
// ***************************************************************************

const listOfFacts = [
  {
    title: "Hi0",
    description: "some stuff",
    link: "",
  },
  {
    title: "Hi1",
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
];

const getCurrentCard = (index) => {
  if (index >= listOfFacts.length) {
    // console.log("too high!!!!");
    return {
      title: "end",
      description: "of the list",
      link: "",
    };
  }

  return listOfFacts[index];
};

module.exports = {
  thing: "hi",
  factsList: listOfFacts,
  getCurrentCard: getCurrentCard,
};
