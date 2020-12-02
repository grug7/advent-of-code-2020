const fs = require('fs');

const text = fs.readFileSync('./input.txt').toString('utf-8');
const data = text.trim().split('\n');

const part1 = () => {
  for (let i = 0; i < data.length; i++) {
    const number1 = Number(data[i]);

    for (let j = i; j < data.length; j++) {
      if (j !== i) {
        const number2 = Number(data[j]);

        if (number1 + number2 === 2020) {
          return number1 * number2;
        }
      }
    }
  }
}

const part2 = () => {
  for (let i = 0; i < data.length; i++) {
    const number1 = Number(data[i]);

    for (let j = i; j < data.length; j++) {
      if (j !== i) {
        const number2 = Number(data[j]);

        for (let k = j; k < data.length; k++) {
          if (k !== j) {
            const number3 = Number(data[k]);

            if (number1 + number2 + number3 === 2020) {
              return number1 * number2 * number3;
            }
          }
        }
      }
    }
  }
}

console.log(`part1: ${part1()}`);
console.log(`part2: ${part2()}`);
