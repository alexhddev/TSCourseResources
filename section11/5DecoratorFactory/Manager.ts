@withDepartment('Automotive')
class Manager {
    task: string = 'Simple task'
    project: string = 'Simple project'
    constructor(){
        console.log('Initializing the Manager class')
    }
}

console.log(new Manager())

function withDepartment(department: string){
    return function <T extends { new(...args: any[]): {} }>(baseClass: T) { 
        console.log('Invoking decorator!!!')
        return class extends baseClass {
            department = department;
            constructor(...args: any[]) {
                super(...args);
                console.log('Adding employment date to ' + baseClass.name)
            }
        }
    }
}



