//"survey.js created and made a big callback waterafll"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arr = [];

rl.question(`\nPlease enter your name: `, (answer) => {
  arr.push(answer);
  rl.question(`What do you like doing in your free time? `, (answer) => {
    arr.push(answer);
    rl.question('What do you enjoy listening to while doing that? ', (answer) => {
      arr.push(answer);
      rl.question(`Whats your current TV show obsession? `, (answer) => {
        arr.push(answer);
        rl.question(`Whats your favorite snack? `, (answer) => {
          arr.push(answer);
          rl.question(`Whats your favorite season? `, (answer) => {
            console.log(`\nThank you for your valuable feedback!\nYour profile intro text has been generated!\n\n`);
            arr.push(answer);
            // console.log(arr);
            console.log(`Looks like we've got a hip new member for our super exclusive club.`);
            console.log(`Our friend ${arr[0]} enjoys kicking it back after a long days work and watching ${arr[3]} with some ${arr[4]}. Although, nothing beats some ${arr[1]} while listening to ${arr[2]} for those maximum ${arr[5]} season vibes.\n`);
            rl.close();
          });
        });
      });
    });
  });
});