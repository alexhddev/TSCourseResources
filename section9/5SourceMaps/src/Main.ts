function doStuffTimes(times: number): void{
    for (let index = 0; index < times; index++) {
        console.log('Doing something' + index);        
    }
}

interface Person {
    name: string,
    age: number
}

function printPerson(person: Person) {
    console.log(`${person.name} is ${person.age} years old`)
}

doStuffTimes(3);
printPerson({
    name: 'John',
    age: 30
})