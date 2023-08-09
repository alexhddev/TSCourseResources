import { Router, Request, Response, } from 'express'
import * as handlers from './Employee.handler';

const employeesRouter = Router();

employeesRouter.get('/', handlers.getAll)

export default employeesRouter;