export {}

let queryResult: any = 5; // disable Type check
queryResult = '5'
queryResult = [5]

function getSalaryFromExternalService(employeeId: number): unknown{
    return JSON.parse('5')
}

let salary = getSalaryFromExternalService(123);

if (typeof salary === 'number') { // type narrowing
    salary++
};
if (typeof salary === 'string') { // type narrowing
    salary.includes('$')
};

if (typeof salary === 'string' || typeof salary === 'number') { // type narrowing
    salary.valueOf();
};

if (salary &&
    typeof salary === 'object' &&
    'history' in salary && 
    Array.isArray(salary.history)) {
    salary.history.push(12000)
}

// When to use any?
// Start of JS to TS migration
// Inside unit tests
// 