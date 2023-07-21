class Project {

    budget: number = 900;

    addToBudget(@logParamDec amount: number){
        this.budget = this.budget + amount;
    }

    writeTests() {
        console.log('Tests are important!!!')
    }
    fixBugInProduction() {
        console.log('Fixing bug in production .... :(((')
    }
}
 
const project = new Project();
project.addToBudget(300)
project.addToBudget(300)


function report(target: Object, propertyKey: string, parameterIndex: number){
    console.log(`${propertyKey} was called with param at index ${parameterIndex}`)
}

function logParamDec(target: Object, propertyKey: string, parameterIndex: number){
    console.log('target:')
    console.log(target)
    console.log('propertyKey:')
    console.log(propertyKey)
    console.log('parameterIndex:')
    console.log(parameterIndex)
}

