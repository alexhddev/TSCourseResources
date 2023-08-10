import { Router, Request, Response, json, } from 'express'
import { resolveInjected } from '../../shared/Container';
import { EmployeeDataAccess } from '../empl/EmployeeDataAccess';


const reportsRouter = Router();
reportsRouter.use(json())
const employeeDataAccess = resolveInjected<EmployeeDataAccess>('EmployeeDataAccess');

reportsRouter.get('/salaries', async (req: Request, res: Response)=>{
    const allEmpl = await employeeDataAccess.getAllEmployees();

    const allSalaries = allEmpl.map((empl) =>({
        [empl.name]: empl.salary
    }))
    res.json(allSalaries)
})

export default reportsRouter;