// MDN definition: Prototypes are the mechanism by which JavaScript objects inherit features from one another

const empl1 = {
    name: 'Mary',
    salary: 100000
}

function Employee(name, salary) {
    this.name = name,
    this.salary = salary
}

class Manager extends Employee {
    tasks;
    constructor(name, salary, tasks) {
        super(name, salary)
        this.tasks = tasks
    }
}

const empl2 = new Employee('John', 100000)
const empl3 = new Manager('Bil', 100000, 'some tasks ...')
const employees = [empl1, empl2, empl3]

console.log(empl1)
console.log(empl2)
console.log(empl3)
console.log(employees)

//---------------------

Manager.prototype.project = 'Secret project'
const empl4 = new Manager('Bil', 100000, 'some tasks ...')
// console.log(empl4);
// console.log(empl4.project); // 'Secret project', TS will not recognize it

// ---------------------
// console.log(empl1.prototype) // prints undefined
// console.log(JSON.stringify(Object.getPrototypeOf(employees))) // prints {}
// console.log(Object.keys(empl4)) // doesn't print the project
// console.log(Object.getOwnPropertyDescriptor(empl4, 'name')); // properties also have prototypes 