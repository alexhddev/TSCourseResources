import express, { NextFunction, Request, Response } from 'express'
import employeesRouter from './api/empl/Employee.route';
import reportsRouter from './api/reports/Reports.route';

const port = 3000;

export class Server {

    private app = express();

    startServer() {

        this.app.use('/employees', employeesRouter)

        this.app.use('/reports', reportsRouter)

        //this prints the error in the console, rather than in the response!
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.error(err.stack)
            res.send(err.message)
            next();
        })

        this.app.listen(port, () => {
            console.log('Listening on port ' + port)
        })
    }

}

new Server().startServer()