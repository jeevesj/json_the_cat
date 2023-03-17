const args = process.argv;

const latin = args.slice(2);

var piggy = 'ay'
let finalForm = ""

for (let i = 0; i < latin.length; i++) {
  let first = latin[i][0];
  let newLatin = latin[i].slice(1);
  finalForm = finalForm.concat(newLatin + first + piggy);
  if(i < latin.length - 1) {
    finalForm = finalForm.concat(" ");
  }
}

console.log(finalForm);