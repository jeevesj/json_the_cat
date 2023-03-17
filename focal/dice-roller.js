// Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.
const args = process.argv;

const highRoller = args.slice(2);
let results = "Rolled " + highRoller[0] + " dice: "; 

for (let i = 0; i < highRoller[0]; i++) {
  let dice = Math.ceil(Math.random() * 6); 
  results = results + dice;
  if(i < highRoller[0] - 1) {
    results = results + ", ";
  } 
}

console.log(results);