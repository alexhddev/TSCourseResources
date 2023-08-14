type Position =
    | 'Manager'
    | 'HR'
    | 'Engineer'

export type Employee = {
    id?: string
    name: string,
    employedAt?: Date
    position: Position,
    salary: number
}