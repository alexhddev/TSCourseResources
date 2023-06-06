export {}

const CEO = 'Jeff' // strings are immutable 

const CeoObject = { // objects are not immutable
    name: 'Jeff',
    company: 'Amazon'
} as const

// CeoObject.name = 'Bill'

function toUpperCaseNames(names: ReadonlyArray<string>){
    // names.push('My Name')
    return names.map(name =>{
        return name.toUpperCase()
    })
}


type Position = 'Programmer' | 'Manager' | 'HR' | 'Scrum master'

type Employee = {
    name: string,
    position: Position
}

function paySalary(empl: Employee){
    console.log(`The pay for ${empl.position} is 10000 `)
}

const john = {
    name: 'John',
    position: 'Programmer'
} as const

paySalary(john)






