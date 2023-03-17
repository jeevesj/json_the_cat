const args = process.argv;

const newargs = args.slice(2);

for (let i = 0; i < newargs.length; i++) {
  let backword = "";
  for(let j = newargs[i].length -1; j >=0 ; j--) {
    backword = backword.concat(newargs[i][j]);
  }
  console.log(backword);
}
