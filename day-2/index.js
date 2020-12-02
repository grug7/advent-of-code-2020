const fs = require('fs');

const text = fs.readFileSync('./input.txt').toString('utf-8');
const data = text.trim().split('\n');

const parseRecord = input => {
  const parts = input.split(/[-:\s]\s?/);
  return {
    intOne: parts[0],
    intTwo: parts[1],
    letter: parts[2],
    password: parts[3]
  };
};

const part1 = () => {
  let validPasswords = 0;

  data.forEach(row => {
    const {
      intOne: minimumOccurance,
      intTwo: maximumOccurance,
      letter,
      password
    } = parseRecord(row);

    const charRegex = new RegExp(`${letter}`, 'g');

    const matches = (password.match(charRegex) || []).length;

    if (matches >= minimumOccurance && matches <= maximumOccurance) 
      validPasswords++;
  });

  return validPasswords;
};

const part2 = () => {
  let validPasswords = 0;

  data.forEach(row => {
    const {
      intOne: firstIndex,
      intTwo: secondIndex,
      letter,
      password
    } = parseRecord(row);

    let valid = false;

    if (password[firstIndex - 1] === letter)
      valid = !valid;

    if (password[secondIndex - 1] === letter)
      valid = !valid;

    if (valid)
      validPasswords++;
  });

  return validPasswords;
};

console.log(`part1: ${part1()}`);
console.log(`part2: ${part2()}`);
