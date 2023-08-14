import { Employee } from "../../model/Employee.model";

interface EmployeesListProps {
  employees: Employee[]
}

export function EmployeesList(props: EmployeesListProps) {

  const renderedEmployees = props.employees.map((empl) =>{
    return (
      <tr key={empl.name}>
        <td>{empl.name}</td>
        <td>{empl.salary}</td>
      </tr>
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody >{renderedEmployees}</tbody>
    </table>
  );
}
