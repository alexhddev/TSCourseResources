export { }

function oneYearAgo(date: Date): Date
function oneYearAgo(date: string): string
function oneYearAgo(date: Date | string) {
    const oneYearAgo = new Date(date);
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

    if (typeof date === 'string') {
        return oneYearAgo.toLocaleDateString();
    } else {
        return oneYearAgo;
    }
}
const lastYearDate = oneYearAgo(new Date())
const lastYearString = oneYearAgo('6/9/2026')


function paySalary(monthlySalary: number): void;
function paySalary(monthlySalary: number, hoursOvertime: number, payPerHour: number): void;
function paySalary(monthlySalary: number, hoursOvertime?: number, payPerHour?: number) {
    let overtimePay = 0;
    if (hoursOvertime && payPerHour) {
        overtimePay = hoursOvertime * payPerHour
    }
    const totalPayment = monthlySalary + overtimePay;
    console.log(`For this month, you received ${totalPayment} $`)
}

paySalary(5000);
paySalary(5000, 10, 10)
// @ts-expect-error
paySalary(5000, 20)

function paySalaryWithOptionsObject(monthlySalary: number,
    overtime?: { hoursOvertime: number, payPerHour: number }) { }












