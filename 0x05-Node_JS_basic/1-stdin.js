if (process.stdin.isTTY) {
  process.stdin.setRawMode(false);
} else {
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}

const prompt = 'Welcome to Holberton School, what is your name?';
console.log(prompt);
process.stdin.once('data', (name) => {
  process.stdout.write(`Your name is: ${name}`);
  process.exit();
});

process.on('SIGINT', () => {
  console.log('\rThis important software is now closing');
  process.exit();
});
