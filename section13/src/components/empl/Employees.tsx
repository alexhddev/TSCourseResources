import { useState, useEffect } from "react";
import { Employee } from "../../model/Employee.model";
import { EmployeesList } from "./EmployeesList";
import { getEmployees } from "../../services/FakeDataService";



export function Employees() {
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const employees = await getEmployees();
            setEmployees(employees);
        };
        fetchEmployees();
    }, []);


    return (
        <div>
            <EmployeesList employees={employees} />
        </div>
    )
}