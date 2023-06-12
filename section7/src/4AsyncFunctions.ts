// Watch the Jake Archibald presentation on the event loop on YT

// console.log(1);

// setTimeout(() => {
//     console.log('waited 1 sec')
// }, 1000);

// console.log(2)


function getEmployeeData() {
    const employeeData = {
        name: 'John',
        position: 'Programmer',
        age: 30,
        tasks: ['Write code', 'Drink coffee', 'Write programming cliches ']
    }
    return Promise.resolve(employeeData)
}

// let employeeData: any;
// getEmployeeData().then(data =>{
//     employeeData = data
// }).then(()=>{
//     console.log(employeeData)
// })

async function wrapper() {
    const employeeData = await getEmployeeData();
    console.log(employeeData)
}

wrapper();





















