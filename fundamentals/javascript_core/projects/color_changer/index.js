const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// console.log("buttons: ", buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target.className);

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;

    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;

    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;

    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;

    } 
  });
});
