import { concatenateStrings, concatenateStringsWithSpace } from './Utils.js'

const nameAndFunction = concatenateStrings('John', 'Programmer');

const nameAndFunctionWithSpace = concatenateStringsWithSpace('John', 'Programmer')

console.log(nameAndFunction)
console.log(nameAndFunctionWithSpace)

if (process.argv[2] === 'John') {
    const crypto = await import('crypto')
    const uuid = crypto.randomUUID();
    console.log(uuid)
}