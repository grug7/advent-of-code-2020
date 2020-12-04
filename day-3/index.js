const fs = require('fs');

const text = fs.readFileSync('./input.txt').toString('utf-8');
const data = text.trim().split('\n').map(d => d.split(""));

const TREE = "#";

const calculateTreesHit = trajectory => {
  const { right, down } = trajectory;
  const width = data[0].length;
  let position = {
    x: 0,
    y: 0
  };

  let treesHit = 0;

  for (let i = 0; i < data.length; i++) {
    // if we haven't reached bottom
    if (data[position.y + down]) {
      // get position we would like to move to on x axis
      const expectedPosition = position.x + right;

      // if there is not enough space to move to our expected x axis position, wrap back round
      position.x = expectedPosition % width;
      position.y += down;

      if (data[position.y][position.x] === TREE)
        treesHit++;
    }
  }

  return treesHit;
}

const part1 = () => {
  return calculateTreesHit({ right: 3, down: 1 });
}

const part2 = () => {
  const slope1 = calculateTreesHit({ right: 1, down: 1 });
  const slope2 = calculateTreesHit({ right:3, down: 1 });
  const slope3 = calculateTreesHit({ right: 5, down: 1 });
  const slope4 = calculateTreesHit({ right: 7, down: 1 });
  const slope5 = calculateTreesHit({ right: 1, down: 2 });

  return slope1 * slope2 * slope3 * slope4 * slope5;
}

console.log(`part1: ${part1()}`);
console.log(`part2: ${part2()}`);
