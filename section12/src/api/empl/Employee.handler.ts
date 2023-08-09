import { Response, Request, NextFunction } from 'express';
import { Employee } from './Employee.model';


export async function getAll(req: Request, res: Response<Employee[]>, next: NextFunction) {
    try {
        const allEmployees: Employee[] = []
        res.json(allEmployees)
    } catch (error) {
        next(error)
    }
}

export async function getById(req: Request<{id: string}>, res: Response<Employee | undefined>, next: NextFunction) {
    try {
        const id = req.params.id
        const response = undefined
        res.json(response)
    } catch (error) {
        next(error)
    }
}

type ObjectWithId = {
    id: string
}

export async function addEmployee(req: Request<{}, ObjectWithId, Employee>, res: Response<ObjectWithId>, next: NextFunction) {
    try {

        res.json({
            id: '123'
        })
    } catch (error) {
        next(error)
    }
}