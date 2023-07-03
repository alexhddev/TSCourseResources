import { concatenateStrings, concatenateStringsWithSpace } from './Utils.js'
import { randomUUID } from 'crypto'

const nameAndFunction = concatenateStrings('John', 'Programmer');

const nameAndFunctionWithSpace = concatenateStringsWithSpace('John', 'Programmer')

console.log(nameAndFunction)
console.log(nameAndFunctionWithSpace)