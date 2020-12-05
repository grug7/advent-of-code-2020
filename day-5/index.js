const fs = require('fs');

const text = fs.readFileSync('./input.txt').toString('utf-8');
const data = text.trim().split('\n');

const calculateIndexFromBinary = (binary, isRow) => {
  const range = [0, isRow ? 127 : 7];
  const front = isRow ? 'F' : 'L';

  binary.split('').forEach(b => {
    const newRangePoint = (range[0] + range[1]) / 2;
    range[Number(b === front)] = b === front ? Math.floor(newRangePoint) : Math.ceil(newRangePoint);
  });

  return range[0];
};

const getSeatIds = () => {
  const seats = [];
  data.forEach(seat => {
    const rowRange = [0, 127];
    const colRange = [0, 7];

    const rowBinary = seat.substring(0, 7);
    const rowIndex = calculateIndexFromBinary(rowBinary, true);

    const colBinary = seat.substring(7);
    const colIndex = calculateIndexFromBinary(colBinary, false);

    seats.push((rowIndex * 8) + colIndex);
  });

  seats.sort((a, b) => a - b);
  return seats;
};

const part1 = () => {
  const seats = getSeatIds();
  return seats[seats.length - 1];
}

const part2 = () => {
  const seats = getSeatIds();
  return seats.find((seat, i) => seat !== seats[i+1]-1)+1;
}

console.log(`part1: ${part1()}`);
console.log(`part2: ${part2()}`);
