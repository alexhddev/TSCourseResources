
function greet(name: string) {
    return ('Hello ' + name)
}

const johnGreet = greet('John');

function greetToUpperCase(name: string){
    return ('Hello ' + name.toUpperCase())
}

function consoleGreetJohn(name = 'John') {
    console.log('Hello ' + name.toUpperCase())
}

consoleGreetJohn();
consoleGreetJohn('Bil')

const greetToConsole = (name: string) =>{
    console.log('Hello ' + name);
}

function greetMultiple(...names: string[]) {
    names.forEach(name => {
        greetToConsole(name)
    })
}

greetMultiple('John');
greetMultiple('John', 'Mary');
