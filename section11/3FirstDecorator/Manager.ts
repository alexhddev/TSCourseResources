class Manager {
    //@watchChange
    task: string = 'Simple task'

    project: string = 'Simple project'

    constructor(){
        console.log('Initializing the Manager class')
    }
}

const manager = new Manager();
watchChange(manager, 'project');
manager.project = 'Complicated project'

function watchChange<T extends Object>(target: T, key: keyof T & string) {
    console.log('Calling the watch change decorator')

    let property = target[key];
    const getter = ()=>{
        return property
    };
    const setter = (newVal: any) =>{
        console.log(`${key} changed from ${property} to ${newVal}`)
        property = newVal
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        configurable: true,
        enumerable: true
    })
}


