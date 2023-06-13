export {}

async function getEmployees() {
    return Promise.resolve([
        {
            name: 'John',
            position: 'Programmer',
            salary: 100000  
        }
    ])
}

async function wrapper() {
    const employees = await getEmployees();
}

type EmplServiceReturnType = Awaited<ReturnType<typeof getEmployees>>

function getService() {
    return Promise.resolve('www.myCompany.com')
}

async function resolveServiceFirst<T>(service: Promise<T>) {
    const result = await service
    console.log(result);
}

resolveServiceFirst(getService())

type NestedPromise<T> = Promise<Promise<Promise<T>>>
type InsidePromise<T> = Awaited<NestedPromise<T>>

let uncleanExampleJustToMakeAPoint: InsidePromise<string>











