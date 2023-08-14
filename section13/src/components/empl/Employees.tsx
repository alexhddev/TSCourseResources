import { useState, useEffect } from "react";
import { Employee } from "../../model/Employee.model";
import { EmployeesList } from "./EmployeesList";
import { createEmployee, getEmployees } from "../../services/DataService";
import { EmployeeForm } from "./EmployeeForm";



export function Employees() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [errorMessage, setErrorMessage] = useState('');

    const onEmployeeAdd = async (empl: Employee) => {
        setErrorMessage('')
        try {
            const id = await createEmployee(empl);
            setEmployees([...employees, empl]);
            return id;
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message)
            }
        }
    };

    useEffect(() => {
        const fetchEmployees = async () => {
            const employees = await getEmployees();
            setEmployees(employees);
        };
        fetchEmployees();
    }, []);


    return (
        <div>
            <EmployeeForm onEmplAdd={onEmployeeAdd} />
            {
                errorMessage ?
                    <label style={{ color: "red" }}>{errorMessage}</label> : null
            }
            <EmployeesList employees={employees} />
        </div>
    )
}