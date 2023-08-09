import { Response, Request, NextFunction } from 'express';
import { Employee } from './Employee.model';

export function validateAsEmployee(req: Request, res: Response, next: NextFunction) {
    try {
        const requestBody = req.body;
        if (!(requestBody as Employee).name) {
            throw new FieldError('Name required!')
        }
        if (!['Manager', 'HR' , 'Engineer'].includes((requestBody as Employee).position)) {
            throw new FieldError('Invalid position!!')
        }
        if (!(requestBody as Employee).salary) {
            throw new FieldError('Salary required!')
        }
        const parsedBody: Partial<Employee> = {
            name: requestBody.name,
            position: requestBody.position,
            salary: requestBody.salary
        }
        req.body = parsedBody
        next()
    } catch (error) {
        if (error instanceof FieldError) {
            res.status(400);
        }
        next(error)
    }
}

class FieldError extends Error {
}

