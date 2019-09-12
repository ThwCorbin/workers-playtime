let yourMegaNums = document.querySelector(".yourMegaNums");
let yourPowerNums = document.querySelector(".yourPowerNums");
let megaBtn = document.querySelector(".megaBtn");
let powerBtn = document.querySelector(".powerBtn");

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
};

//# Call youRandNums with lottery parameters
// window.addEventListener(onload, yourRandNums(event));
megaBtn.addEventListener("click", yourRandNums);
powerBtn.addEventListener("click", yourRandNums);

// const bigWin1 = document.querySelector(".bigWin1");
// const bigWin2 = document.querySelector(".bigWin2");
// const smallWin1 = document.querySelector(".smallWin1");
// const smallWin2 = document.querySelector(".smallWin2");
// let bigWin = () => {};

// let smallWin = () => {};
// bigWin();
// smallWin();

//# Better Comments Key
//# Label: (which I custom added to settings.json)
//! Warning: My cat and dog are dangerous sleepers
//? Question: for ya'll
//* Highlight: This is worth mentioning
////Stike: this code from the Akashic Records
//todo: unite for playtime
