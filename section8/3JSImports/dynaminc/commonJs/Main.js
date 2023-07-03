const Utils = require('./Utils');

const nameAndFunction = Utils.concatenate('John', 'Programmer')

const nameAndFunctionWithSpace = Utils.concatenateWithSpace('John', 'Programmer')

console.log(nameAndFunction)
console.log(nameAndFunctionWithSpace)

if (process.argv[2] === 'John') {
    const crypto = require('crypto')
    const uuid = crypto.randomUUID();
    console.log(uuid)
}