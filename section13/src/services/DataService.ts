import { Employee } from "../model/Employee.model";

const URL = 'http://localhost:3000/employees/'

export async function createEmployee(empl: Employee) {
    const result = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(empl)
    });
    const jsonResult = await result.json()
    if (!result.ok) {
        const message = jsonResult[0].message;
        throw new Error(message)
    }
    return jsonResult.id;
}

export async function getEmployees(): Promise<Employee[]> {
    const result = await fetch(URL, {
        method: 'GET'

    });
    const jsonResult = await result.json()
    return jsonResult;
}