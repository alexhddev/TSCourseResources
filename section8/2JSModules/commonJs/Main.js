


const Utils = require('./Utils');
// destructuring with require:
// const {concatenateStrings, concatenateStringsWithSpace} = require('./Utils');

const nameAndFunction = Utils.concatenate('John', 'Programmer')

const nameAndFunctionWithSpace = Utils.concatenateWithSpace('John', 'Programmer')

console.log(nameAndFunction)
console.log(nameAndFunctionWithSpace)