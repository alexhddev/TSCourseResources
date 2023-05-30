export {}

// Contract between function arguments and returned values types

// Dump requirement: Build a function that wraps it's argument into an array
function toArrayz(arg: any){
    return [arg]
}

const myArray = toArrayz('My name');

function toArrayFromString(arg: string){
    return [arg]
}

function toArrayFromNumber(arg: number){
    return [arg]
}

function toArrayFromBoolean(arg: boolean){
    return [arg]
}



function toArray<T>(arg: T):[T]{
    return [arg]
}

const myNameArray = toArray('Alex')




















