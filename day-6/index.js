const fs = require('fs');
const text = fs.readFileSync('./input.txt').toString('utf-8');

const groups = text
  .trim()
  .split(/^\s*$/gm);

const questions = Array.from('abcdefghijklmnopqrstuvwxyz');

const removeDuplicates = data => data
  .map(g => g
    .replace(/\n/g, '')
    .split('')
    .filter((l, i, p) => p.indexOf(l) === i)
    .join(''));

const part1 = () => removeDuplicates(groups)
  .map(g => g.length)
  .reduce((a, b) => a + b);

const part2 = () => groups
  .map(g => g
    .split(/\n/g)
    .filter(a => a !== ''))
  .map(group =>
    questions.filter(question =>
      group.every(person =>
        person.indexOf(question) > -1)).length)
  .reduce((a, b) => a + b);


console.log(`part1: ${part1()}`);
console.log(`part2: ${part2()}`);
