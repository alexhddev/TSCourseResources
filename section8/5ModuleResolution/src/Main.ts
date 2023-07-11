// Module: piece if code that references another piece of code

import { Employee, printEmployee } from './Utils'; // relative import
import { randomUUID } from 'crypto'; // absolute import 
import { MySpecialType, sayHello } from '@superUtils';

const john: Employee = {
    age: 30,
    name: 'John'
}

printEmployee(john);
sayHello();
console.log(randomUUID)