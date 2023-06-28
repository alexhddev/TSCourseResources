import { concatenate as myConcatenate, concatenateWithSpace as myConcatenateWithSpace } from './Utils'

const nameAndFunction = myConcatenate('John', 'Programmer');

const nameAndFunctionWithSpace = myConcatenateWithSpace('John', 'Programmer')

console.log(nameAndFunction)
console.log(nameAndFunctionWithSpace)