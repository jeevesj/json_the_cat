const args = process.argv;

const newargs = args.slice(2);

let sum = 0;

for (let i = 0; i < newargs.length; i++) {
  sum += Number(newargs[i]);
}

console.log(sum);

