type Task = {
    name: string,
    level: 'low' | 'medium' | 'complicated'
}

class Manager {

    @withComplicatedTask
    tasks: Task[] = []
}

const manager = new Manager();
console.log(manager)

function withComplicatedTask<T, V extends Task[]>(target: undefined, context: ClassFieldDecoratorContext<T, V>) {
    return function (args: V) {
        args.push({
            name: 'added task',
            level: 'complicated'
        })
        return args;
    }
}