
type WithName = {
    name: string
}

function printName(arg: WithName){
    console.log(arg.name)
}

printName({
    name: 'John'
})