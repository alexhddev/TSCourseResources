const Utils = require('./Utils');
// destructuring with require:
// const {concatenateStrings, concatenateStringsWithSpace} = require('./Utils');

const nameAndFunction = Utils.concatenateStrings('John', 'Programmer')

const nameAndFunctionWithSpace = Utils.concatenateStringsWithSpace('John', 'Programmer')

console.log(nameAndFunction)
console.log(nameAndFunctionWithSpace)

if (process.argv[2] === 'John') {
    const crypto = require('crypto')
    const uuid = crypto.randomUUID();
    console.log(uuid)
}