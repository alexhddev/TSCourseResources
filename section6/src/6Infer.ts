export { }



function printArray(args: string[]) {
    args.forEach((arg, index) => {
        console.log(`Arg at index ${index} is ${arg}`)
    })
}

printArray(['first', 'second', 'third'])

// infer allows us to go into a type and pull out another type

// Problem: create an unpack type:
// type => type
// type[] => type
// promise(Type) => type

type UnpackArray<T extends Array<any>> = T extends (infer R)[]? R: never
type UnpackPromise<T extends Promise<any>> = T extends Promise<infer R> ? R : never

let someStringType: UnpackArray<string[]>; // expect string type
let someStringType2: UnpackPromise<Promise<string>>; // expect string type

type Unpack<T> =
    T extends (infer R)[] ? R :
    T extends Promise<infer R> ? R :
    T;

let someString: Unpack<string>
let someStringFromArray: Unpack<string[]> // expect string
let someStringFromPromise: Unpack<Promise<string>> // expect string

/////////////////

type Employee = {
    name: string,
    age: number
}

type EmployeeValues<T> = T extends { name: infer NAME, age: infer AGE } ? [NAME, AGE] : never

let employeeValues: EmployeeValues<Employee>

/////////////////

type AwesomePosition = 'AwesomeProgrammer' | 'AwesomeHr' | 'AwesomeManager'

type RemoveAwesome<T> = T extends `Awesome${infer R extends string}`? R: never 

type RegularPosition = RemoveAwesome<AwesomePosition>

type RemovePrefix<Prefix extends string,T> = T extends `${Prefix}${infer R extends string}`? R: never 

type RegularPosition2 = RemovePrefix<'Awesome', AwesomePosition>



















































