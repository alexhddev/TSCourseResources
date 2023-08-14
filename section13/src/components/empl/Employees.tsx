import { useState, useEffect } from "react";
import { Employee } from "../../model/Employee.model";
import { EmployeesList } from "./EmployeesList";
import { createEmployee, getEmployees } from "../../services/FakeDataService";
import { EmployeeForm } from "./EmployeeForm";



export function Employees() {
    const [employees, setEmployees] = useState<Employee[]>([]);

    const onEmployeeAdd = async (empl: Employee) => {
        console.log(empl)
        const id = await createEmployee(empl);
        setEmployees([...employees, empl]);
        return id;
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
            <EmployeeForm onEmplAdd={onEmployeeAdd}/>
            <EmployeesList employees={employees} />
        </div>
    )
}