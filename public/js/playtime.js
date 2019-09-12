let yourMegaNums = document.querySelector(".yourMegaNums");
let yourPowerNums = document.querySelector(".yourPowerNums");
let megaBtn = document.querySelector(".megaBtn");
let powerBtn = document.querySelector(".powerBtn");
let bigWin = document.querySelector(".bigWin");
let smallWin = document.querySelector(".smallWin");

//# Rotate and inject treats if we win big or small
let bigWinTreat = () => {
  let arr = [
    "Travel the world by camel",
    "Hire a personal cricket bat knocker-in-er",
    "Take everyone to eat at Joe's",
    "Find inner peace through hot air balloon photography",
    "Climb the hill that's near Mt Everest",
    "Lease a spaceplane for family holidays",
    "Book Daft Punk for the kids' birthday parties",
    "Buy your favorite animal from the zoo",
    "Install electrified tomato cages and squirrel traps",
    "Plant a lobster and butter tree"
  ];
  let treatNum = () => Math.floor(Math.random() * Math.floor(arr.length));
  let text = document.createTextNode(arr[treatNum()]);
  bigWin.innerText = "";
  bigWin.appendChild(text);
};

let smallWinTreat = () => {
  let arr = [
    "Expand your interesting grey rock collection",
    "Order pizza AND wings",
    "Buy the good absinthe",
    "Party at the car wash!",
    "Take the kids to the double arches",
    "Eat a jar of tiny shrimp with cocktail sauce",
    "Pay for dry cleaning",
    "Buy socks for most days of the week",
    "Columbia House Records subscription!",
    "7/11 surely has lobster on those rolly things"
  ];
  let treatNum = () => Math.floor(Math.random() * Math.floor(arr.length));
  let text = document.createTextNode(arr[treatNum()]);
  smallWin.innerText = "";
  smallWin.appendChild(text);
};

bigWinTreat();
smallWinTreat();

//# Function returns 6 random numbers and injects them into DOM
let yourRandNums = e => {
  let mainBallMax;
  let extraBallMax;
  let text;
  let li;
  //* MegaMillions: 1-70 main balls and 1-25 mega balls
  //* PowerBall: 1-69 main balls and 1-26 power balls
  //* Remove yourMegNums or yourPowerNums child nodes
  if (e.target === megaBtn) {
    mainBallMax = 70;
    extraBallMax = 25;
    while (yourMegaNums.firstChild)
      yourMegaNums.removeChild(yourMegaNums.firstChild);
  } else if (e.target === powerBtn) {
    mainBallMax = 69;
    extraBallMax = 26;
    while (yourPowerNums.firstChild)
      yourPowerNums.removeChild(yourPowerNums.firstChild);
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
    e.target === megaBtn
      ? yourMegaNums.appendChild(li)
      : yourPowerNums.appendChild(li);
  }
  let extraBall = Math.floor(Math.random() * Math.floor(extraBallMax) + 1);
  text = document.createTextNode(`${extraBall}`);
  li = document.createElement("li");
  li.appendChild(text);
  //* append nodes to either Mega Millions or Powerball <ul>
  e.target === megaBtn
    ? yourMegaNums.appendChild(li)
    : yourPowerNums.appendChild(li);
  bigWinTreat();
  smallWinTreat();
};

//# Call youRandNums with lottery parameters
// window.addEventListener(onload, yourRandNums(event));
megaBtn.addEventListener("click", yourRandNums);
powerBtn.addEventListener("click", yourRandNums);

//# Better Comments Key
//# Label: (which I custom added to settings.json)
//! Warning: My cat and dog are dangerous sleepers
//? Question: for ya'll
//* Highlight: This is worth mentioning
////Stike: this code from the Akashic Records
//todo: unite for playtime
