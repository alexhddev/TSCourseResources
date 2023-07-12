import { Employee, printEmployee } from "./Utils";
import { v4 } from 'uuid';

const john: Employee = {
    age: 30,
    name: 'John'
}

printEmployee(john);
console.log(v4());