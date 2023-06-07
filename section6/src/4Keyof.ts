export {}

type Position = 'Programmer' | 'Manager' | 'HR' | 'Scrum master'

type Employee = {
    name: string,
    position: Position
}

type EmployeeKeys = keyof Employee // 'name' | 'position'

const john: Employee = {
    name: 'John',
    position: 'Programmer'
}

john['name']

function getProperty2(arg: any, key: string){
    console.log(arg[key])
    return arg[key]
}

function getProperty<T, K extends keyof T>(arg: T, key: K): T[K] {
    console.log(arg[key])
    return arg[key]
}

const johnsName = getProperty(john, 'name')
getProperty(john, 'position')
// getProperty(john, 'age')

function getObjectKeys2<T extends object>(arg: T){
    return Object.keys(arg)
}

function getObjectKeys<T extends Record<string, any>>(arg: T):Array<keyof T>{
    return Object.keys(arg)
}


const someKeys = getObjectKeys([]);
const existingKeys = getObjectKeys({
    abc: 'def'
})