import { Employee, printEmployee } from './Model'
import { sayHello } from '@SuperUtils';

const john: Employee = {
    age: 30,
    name: 'John'
}

printEmployee(john);
sayHello();