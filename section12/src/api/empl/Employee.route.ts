import { Router, Request, Response, json, } from 'express'
import * as handlers from './Employee.handler';
import { validateAsEmployee } from './ZodValidator';

const employeesRouter = Router();

employeesRouter.use(json());

employeesRouter.get('/', handlers.getAll)

employeesRouter.get('/:id', handlers.getById)

employeesRouter.post('/',validateAsEmployee ,handlers.addEmployee)

export default employeesRouter;