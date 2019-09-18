//# Label/Description: Better Comments Key
//! Warning: My cat and dog are sleeping
//? Question: for ya'll
//* Highlight: This is worth mentioning (I added //# to settings.json)
////Stike: this code from the Akashic Records
//todo: unite for playtime
//------------------------

//# Things to do
//todo: refactor to remove console.log("No true Extra")
//todo: fix your special numbers 8 balls spilling over on small screens
//todo: error validation for form numbers
//todo: consider removing New Specials button and functionality
//todo: babel-eslint parser issue
//todo: changes for bigger screens

//# Variables
//* Lottery ball display variables
let yourMegaNums = document.querySelector(".yourMegaNums");
let yourPowerNums = document.querySelector(".yourPowerNums");
let yourSpecialNums = document.querySelector(".yourSpecialNums");

//* Button submit variables
let btnMega = document.querySelector(".btnMega");
let btnPower = document.querySelector(".btnPower");
let btnSpecials = document.querySelector(".btnSpecials");
let btnNewSpecials = document.querySelector(".btnNewSpecials");

//* Special Numbers (user input) variables
let mainBalls = document.querySelector("#formInputMainBalls");
let mainHigh = document.querySelector("#formInputMainHigh");
let extraBalls = document.querySelector("#formInputExtraBalls");
let extraHigh = document.querySelector("#formInputExtraHigh");

//* Winning big or small ideas variables
let bigWin = document.querySelector(".bigWin");
let smallWin = document.querySelector(".smallWin");

//* Other variables
let errorNumsMessage = document.querySelector(".errorNumsMessage");

//# Return random ideas if we win big
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
bigWinIdeas();

//# Return random ideas if we win small
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
smallWinIdeas();

//# Return the number of balls to draw and the maximum/highest ball number
//# Prepare DOM to accept new series of balls (avoid concat with last series)
let ballsNumsMaxs = target => {
  //* Default values MegaMillions: 5 main balls (1-70) + 1 mega ball (1-25)
  //? Use "strings" or numbers?
  let mainBallNum = 5;
  let mainBallMax = 70;
  let extraBallNum = 1;
  let extraBallMax = 25;

  //* Change number/max values for non-Mega Millions lotteries
  //* Check/remove child nodes from yourMegNums, yourPowerNums, yourSpecialNums
  if (target === btnMega) {
    while (yourMegaNums.firstChild)
      yourMegaNums.removeChild(yourMegaNums.firstChild);
  } else if (target === btnPower) {
    //* PowerBall: 5 main balls (1-69) + 1 power ball (1-26); max balls 69/26
    mainBallMax = 69;
    extraBallMax = 26;
    while (yourPowerNums.firstChild)
      yourPowerNums.removeChild(yourPowerNums.firstChild);
  } else if (target === btnSpecials || target === btnNewSpecials) {
    //* Special Numbers: 5-6 main balls + 0-2 extra balls (max balls varies)
    mainBallMax = mainHigh.value;
    extraBallMax = extraHigh.value;
    mainBallNum = mainBalls.value;
    extraBallNum = extraBalls.value;
    while (yourSpecialNums.firstChild)
      yourSpecialNums.removeChild(yourSpecialNums.firstChild);
  } else {
    console.log("Lottery not specified.");
  }

  return [target, mainBallNum, mainBallMax, extraBallNum, extraBallMax];
};

//# Return a random ball numbered between 1 and ballMax (e.g. 1-70)
let ballNumber = ballMax => {
  return Math.floor(Math.random() * Math.floor(ballMax) + 1);
};

//# Build nodes and append to <ul> && styly extra balls
let buildNodes = (ball, target, extra) => {
  let text = document.createTextNode(`${ball}`);
  let li = document.createElement("li");
  li.appendChild(text);
  target === btnMega
    ? yourMegaNums.appendChild(li)
    : target === btnPower
    ? yourPowerNums.appendChild(li)
    : yourSpecialNums.appendChild(li);

  //* Change extra ball's color/border-color to be opposite of main balls'
  extra === true && target === btnMega
    ? ((yourMegaNums.lastChild.style.color = "#a6caca"),
      (yourMegaNums.lastChild.style.backgroundColor = "#483d8b"),
      (yourMegaNums.lastChild.style.borderColor = "#dc143c"))
    : extra === true && target === btnPower
    ? ((yourPowerNums.lastChild.style.color = "#a6caca"),
      (yourPowerNums.lastChild.style.backgroundColor = "#483d8b"),
      (yourPowerNums.lastChild.style.borderColor = "#dc143c"))
    : extra === true && (target === btnSpecials || target === btnNewSpecials)
    ? ((yourSpecialNums.lastChild.style.color = "#a6caca"),
      (yourSpecialNums.lastChild.style.backgroundColor = "#483d8b"),
      (yourSpecialNums.lastChild.style.borderColor = "#dc143c"))
    : console.log("No true extra");
};

//# Generate and inject balls into DOM
let generateBalls = arr => {
  let [target, mainBallNum, mainBallMax, extraBallNum, extraBallMax] = arr;
  let ball = null;
  let ballArr = [];

  // * Generate/inject main balls
  for (let i = 1; i <= mainBallNum; i++) {
    //* Get a randomly numbered ball
    while (ballArr.includes(ball) || ball === null) {
      ball = ballNumber(mainBallMax);
    }
    //* Add ball to array so that we do not repeat it
    ballArr.push(ball);

    //* Build nodes and append to <ul>
    buildNodes(ball, target, false);
  }

  //* Generate and append any extra balls
  if (extraBallNum === 0) {
    return;
  } else if (extraBallNum === 1) {
    ball = ballNumber(extraBallMax);
    buildNodes(ball, target, true);
  } else {
    ball = null;
    ballArr.length = 0;

    for (let i = 1; i <= extraBallNum; i++) {
      while (ballArr.includes(ball) || ball === null) {
        ball = ballNumber(extraBallMax);
      }
      ballArr.push(ball);
      buildNodes(ball, target, true);
    }
  }
};

//# Return random numbers and inject them into DOM
let yourRandNums = e => {
  e.preventDefault();
  let target = e.target;

  //* Get the number of balls to draw and the maximum(highest) ball numbers
  //* Then generate the main and extra balls and inject into DOM
  generateBalls(ballsNumsMaxs(target));

  //* Refresh winning ideas
  bigWinIdeas();
  smallWinIdeas();
};

// todo form validation for numbers
//# Return error message if user provided invalid numbers in form inputs
let errorNums = () => {
  errorNumsMessage.removeAttribute("hidden");
};

//# Call yourRandNums()
btnMega.addEventListener("click", yourRandNums);
btnPower.addEventListener("click", yourRandNums);
btnSpecials.addEventListener("click", yourRandNums);
btnNewSpecials.addEventListener("click", yourRandNums);
mainBalls.oninvalid = errorNums;
extraBalls.oninvalid = errorNums;
