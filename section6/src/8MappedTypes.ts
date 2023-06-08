export {}

type Position = 'Programmer' | 'HR' | 'Manager' | 'ScrumMaster'

type PositionDuties = {
    Programmer: string[],
    HR: string[],
    Manager: string[]
}

type PositionDutiesMap = {
    [position in Position]: string[] 
}

type PositionDutiesMapGeneric<T extends string> = {
    [key in T]: string[] 
}


type MirrorGenericType<T> = T

type MirrorMapType<T> = {
   [key in keyof T]: T[key]
}

type Employee = {
    readonly name: string,
    age: number
}

// key remapping
type Awesome<T> = {
    [key in keyof T as `awesome${Capitalize<string & key>}`]: T[key]
}
type AwesomeEmployee = Awesome<Employee>

type Mutable<T> = {
    -readonly [key in keyof T]: T[key]
 }


type MutableEmployee = Mutable<Employee>
type ReadonlyEmployee = Readonly<Employee>
 
















