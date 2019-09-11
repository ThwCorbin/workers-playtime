let x = 0;

while (x <= 5) {
  console.log(x);
  x++;
}

let bigFunc = (dog, cat) => {
  console.log(`${dog} is a dog`);
  console.log(`${cat} is a cat`);
};

let smallFunc = (cat, dog = "Joe") => {
  console.log(`${cat} is a coolio cat`);
  console.log(`${dog} is no foolio`);
};

bigFunc("Nellie", "Freddie");
smallFunc("Freddie");

//# Better Comments Key
//# Label: (which I custom added to settings.json)
//! Warning: My cat and dog are dangerous sleepers
//? Question: for ya'll
//* Highlight: This is worth mentioning
////Stike: this code from the Akashic Records
//todo: unite for playtime
