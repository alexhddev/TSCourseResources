export type Employee = {
    name: string,
    age: number
}

export function printEmployee(empl: Employee) {
    console.log(`${empl.name} is ${empl.age} years old`)
}