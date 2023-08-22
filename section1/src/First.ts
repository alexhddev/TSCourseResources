
type WithName = {
    name: string
}

async function printName(arg: WithName){
    console.log(arg.name)
}

printName({
    name: 'John'
})