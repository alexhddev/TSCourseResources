export { }

type Employee = {
    name: string,
    position: string
    age: number,
    salary: {
        amount: any,
        bonus: number
    }
}

type MirrorMapType<T> = {
    [key in keyof T]: T[key]
}


type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

const nameAndAge: MyPick<Employee, 'name' | 'age'> = {
    name: 'SomeName',
    age: 30
}

type MyReadOnly<T> = {
   readonly [key in keyof T]: T[key]
}




type DeepReadonly<T> = keyof T extends never ? T :

{
    readonly [key in keyof T]: DeepReadonly<T[key]>
 }

 type ReadOnlyEmpl = DeepReadonly<Employee>















