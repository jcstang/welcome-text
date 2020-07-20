const listOfQuestions = [
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
  if (index >= listOfQuestions.length) {
    console.log("too high!!!!");
    return {
      title: "end",
      description: "of the list",
      link: "",
    };
  }

  return listOfQuestions[index];
};

module.exports = {
  thing: "hi",
  questionList: listOfQuestions,
  getCurrentCard: getCurrentCard,
};
