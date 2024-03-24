const clickOnAvailable = (event) => {
  if (event.target.className === "available") {
    console.log("kutya");
  }
};

window.clickOnAvailable = clickOnAvailable;
export default clickOnAvailable;
