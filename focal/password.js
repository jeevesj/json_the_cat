const args = process.argv;

const newargs = args.slice(2);

let password = newargs[0].toString();
let newPassword = '';

for (let i = 0; i < password.length ; i++) {
  if (password[i] === 'a') {
    newPassword = newPassword + '4';
  } else if (password[i] === 'e') {
    newPassword = newPassword + '3';
  } else if (password[i] === 'o') {
    newPassword = newPassword + '0';
  } else if (password[i] === 'l') {
    newPassword = newPassword + '1';
  } else {
    newPassword = newPassword + password[i];
  }
};

//password = password.replace('a','4').replace('e','3').replace('o','0').replace('l','1');

console.log(newPassword);