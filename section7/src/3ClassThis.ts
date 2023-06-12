export {}

class Manager {

    private name: string
    private tasks: string[] = []

    constructor( name: string) {
        this.name = name;
    }

    addTask(task: string) {
        this.tasks.push(task)
    }

    printTasksWithArrowFunction() {
        this.tasks.forEach(task => {
            console.log(task + ' belongs to ' + this.name)
        })
    }

    printTasksWithRegularFunction() {
        function printTasks(name: string, tasks: string[]) {
            tasks.forEach(task => {
                console.log(task + ' belongs to ' + name)
            })
        }
        printTasks(this.name, this.tasks);
    }
}

const myManager = new Manager('John');
myManager.addTask('Hold Short meeting')

myManager.printTasksWithArrowFunction();
myManager.printTasksWithRegularFunction();