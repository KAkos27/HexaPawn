const giveClassNames = (classList) => {
  const buttons = document.querySelector(".board").querySelectorAll("button");
  buttons.forEach((element, i) => {
    element.className = classList[i];
  });
};

export default giveClassNames;
