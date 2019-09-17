let yourMegaNums = document.querySelector(".yourMegaNums");
let yourPowerNums = document.querySelector(".yourPowerNums");
let yourSpecialNums = document.querySelector(".yourSpecialNums");
let btnMega = document.querySelector(".btnMega");
let btnPower = document.querySelector(".btnPower");
let formSpecial = document.querySelector("#formSpecial");
let btnSpecials = document.querySelector(".btnSpecials");
let btnNewSpecials = document.querySelector(".btnNewSpecials");
let formInputMainHigh = document.querySelector("#formInputMainHigh");
let formInputExtraHigh = document.querySelector("#formInputExtraHigh");
// let errorNumsMessage = document.querySelector(".errorNumsMessage");
let bigWin = document.querySelector(".bigWin");
let smallWin = document.querySelector(".smallWin");

//# Pick random ideas if we win big or small
let bigWinIdeas = () => {
  let arr = [
    "Travel around the world by camel",
    "Hire a personal cricket batsman runner",
    "Build a space elevator for easy access to your getaway moon base home",
    "Find inner peace racing hot air balloons",
    "Climb the hill that's near Mt Everest",
    "Lease a spaceplane for family holidays",
    "Book Daft Punk for the kids' birthdays",
    "Buy your favorite animal from the zoo",
    "Install electrified tomato cages and punji stick squirrel traps",
    "Plant a lobster and butter tree"
  ];
  let ideaNum = () => Math.floor(Math.random() * Math.floor(arr.length));
  let text = document.createTextNode(arr[ideaNum()]);
  bigWin.innerText = "";
  bigWin.appendChild(text);
};

let smallWinIdeas = () => {
  let arr = [
    "Expand your grey rock collection",
    "Order pizza AND wings",
    "Buy the good absinthe",
    "Party at the car wash!",
    "Take the kids to the double arches",
    "Eat a jar of tiny shrimp with cocktail sauce",
    "Pay for dry cleaning",
    "Buy socks for most days of the week",
    "Columbia House Records subscription!",
    "7/11 surely has lobster on the rolly things"
  ];
  let ideaNum = () => Math.floor(Math.random() * Math.floor(arr.length));
  let text = document.createTextNode(arr[ideaNum()]);
  smallWin.innerText = "";
  smallWin.appendChild(text);
};

bigWinIdeas();
smallWinIdeas();

//# Function returns 6 random numbers and injects them into DOM
let yourRandNums = e => {
  e.preventDefault();
  let mainBallMax;
  let extraBallMax;
  let text;
  let li;
  //* MegaMillions: 1-70 main balls and 1-25 mega balls
  //* PowerBall: 1-69 main balls and 1-26 power balls
  //* Remove yourMegNums or yourPowerNums child nodes
  if (e.target === btnMega) {
    mainBallMax = 70;
    extraBallMax = 25;
    while (yourMegaNums.firstChild)
      yourMegaNums.removeChild(yourMegaNums.firstChild);
  } else if (e.target === btnPower) {
    mainBallMax = 69;
    extraBallMax = 26;
    while (yourPowerNums.firstChild)
      yourPowerNums.removeChild(yourPowerNums.firstChild);
  } else if (e.target === formSpecial || e.target === btnSpecials) {
    // * Use one or the other above depending on using form's input or button
    mainBallMax = formInputMainHigh.value;
    extraBallMax = formInputExtraHigh.value;
    while (yourSpecialNums.firstChild)
      yourSpecialNums.removeChild(yourSpecialNums.firstChild);
  } else if (e.target === btnNewSpecials) {
    mainBallMax = formInputMainHigh.value;
    extraBallMax = formInputExtraHigh.value;
    while (yourSpecialNums.firstChild)
      yourSpecialNums.removeChild(yourSpecialNums.firstChild);
  } else {
    console.log("Lottery not specified.");
  }

  //* Generate 6 balls and inject into DOM
  for (let i = 1; i <= 5; i++) {
    let ball = null;
    let ballArr = [];

    //* Return a random ball number
    let randomBall = () => {
      return (ball = Math.floor(Math.random() * Math.floor(mainBallMax) + 1));
    };

    //* if ball array includes the number (or ball is null), return a new ball
    //* otherwise push ball number to the array
    ballArr.includes(ball) || ball === null ? randomBall() : ballArr.push(ball);

    text = document.createTextNode(`${ball}`);
    li = document.createElement("li");
    li.appendChild(text);
    //* append nodes to either Mega Millions or Powerball <ul>
    e.target === btnMega
      ? yourMegaNums.appendChild(li)
      : e.target === btnPower
      ? yourPowerNums.appendChild(li)
      : yourSpecialNums.appendChild(li);
  }
  let extraBall = Math.floor(Math.random() * Math.floor(extraBallMax) + 1);
  text = document.createTextNode(`${extraBall}`);
  li = document.createElement("li");
  li.appendChild(text);
  //* append nodes to either Mega Millions or Powerball <ul>
  e.target === btnMega
    ? yourMegaNums.appendChild(li)
    : e.target === btnPower
    ? yourPowerNums.appendChild(li)
    : yourSpecialNums.appendChild(li);
  bigWinIdeas();
  smallWinIdeas();
};

// todo form validation for numbers
//# Return error message if user provided invalid numbers in form inputs
// let errorNums = () => {
//   errorNumsMessage.removeAttribute("hidden");
// };

//# Call youRandNums with lottery parameters
// window.addEventListener(onload, yourRandNums(event));
btnMega.addEventListener("click", yourRandNums);
btnPower.addEventListener("click", yourRandNums);
btnSpecials.addEventListener("click", yourRandNums);
formSpecial.onsubmit = yourRandNums;
// formInputMainBalls.oninvalid = errorNums;
btnNewSpecials.addEventListener("click", yourRandNums);

//# Better Comments Key
//# Label: (which I custom added to settings.json)
//! Warning: My cat and dog are dangerous sleepers
//? Question: for ya'll
//* Highlight: This is worth mentioning
////Stike: this code from the Akashic Records
//todo: unite for playtime
