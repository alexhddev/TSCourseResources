class Project {

    budget: number = 900;
    writeTests() {
        console.log('Tests are important!!!')
    }
    @logDecoratorInternals2
    fixBugInProduction() {
        console.log('Fixing bug in production .... :(((')
    }
}
 
const project = new Project();
project.fixBugInProduction();

function logDecoratorInternals1 (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('target: ');
    console.log(target)
    console.log('propertyKey: ')
    console.log(propertyKey)
    console.log('descriptor: ')
    console.log(descriptor)
}

function logDecoratorInternals2 (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod: Function = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log('what is this???')
        console.log(this)
        originalMethod.apply(this, args)
    }
}