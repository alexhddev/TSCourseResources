export { }

const names: string[] = []
const names2: Array<string> = []


type Employee = {
    name: string,
    role: string
}

async function getEmployees<T>(url: string):Promise<T[]> {
    const result = await fetch(url)
    const parsedResult = await result.json()
    return parsedResult;
}

async function wrapper(){
    const employees = await getEmployees<Employee>('internalEmployeeService.com')
    const firstEmployee = employees[0];
}