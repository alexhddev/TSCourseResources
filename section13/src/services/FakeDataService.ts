import { Employee } from "../model/Employee.model";

export async function getEmployees(): Promise<Employee[]> {
    return [{
        name: 'John',
        employedAt: new Date(),
        id: '123',
        position: 'Engineer',
        salary: 55000
    },
    {
        name: 'Bil',
        employedAt: new Date(),
        id: '124',
        position: 'Engineer',
        salary: 55000
    },
    {
        name: 'Mary',
        employedAt: new Date(),
        id: '125',
        position: 'Engineer',
        salary: 55000
    }]

}