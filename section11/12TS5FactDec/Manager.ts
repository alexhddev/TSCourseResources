type Task = {
    name: string,
    level: 'low' | 'medium' | 'complicated'
}

class Manager {

    @withTask({
        name: 'added task',
        level: 'low'
    })
    tasks: Task[] = []

    @withComplicatedTask()
    extraTasks: Task[] = []
}

const manager = new Manager();
console.log(manager)

function withTask(task: Task) {
    return function <T, V extends Task[]>(target: undefined, context: ClassFieldDecoratorContext<T, V>) {
        return function (args: V) {
            args.push(task)
            return args;
        }
    }
}

function withComplicatedTask(){
    return withTask({
        name: 'added task',
        level: 'complicated'
    })
}