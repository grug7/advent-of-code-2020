const fs = require('fs');

const text = fs.readFileSync('./input.txt').toString('utf-8');
const data = text.trim();

const requiredFields = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid'
];

const validationRules = {
  byr: /^([1][9][2-9][0-9]|[2][0][0][0-2])$/g,
  iyr: /^[2][0]([1][0-9]|[2][0])$/g,
  eyr: /^20(2[0-9]|30)$/g,
  hgt: /^(1[5-8][0-9]cm|19[0-3]cm|59in|6[0-9]in|[7][0-6]in)$/g,
  hcl: /^[#][a-f0-9]{6}$/g,
  ecl: /^(amb|blu|brn|gry|grn|hzl|oth)$/g,
  pid: /^[0-9]{9}$/g,
  cid: /.*/g
};

const parsePassports = rawData =>
  rawData
    .split(/^\s*$/gm)
    .map(pp =>
      pp
      .match(/[^\s]+/gm)
      .reduce((obj, val) => {
        const [ key, value ] = val.split(':');
        obj[key] = value
        return obj;
      }, {})
    );

const containsFields = passport =>
  requiredFields
    .map(field => passport.hasOwnProperty(field))
    .filter(val => val === false).length === 0

const validateFields = passport =>
  Object.keys(passport)
    .map(key => !!passport[key].match(validationRules[key]))
    .filter(val => val === false).length === 0

const part1 = () =>
    parsePassports(data)
    .filter(passport => containsFields(passport))
    .length

const part2 = () =>
  parsePassports(data)
    .filter(passport => containsFields(passport))
    .filter(passport => validateFields(passport))
    .length

console.log(`part1: ${part1()}`);
console.log(`part2: ${part2()}`);
