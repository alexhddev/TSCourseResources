import express, {Request, Response} from 'express'
import employeesRouter from './api/empl/Employee.route';

const port = 3000;

export class Server {

    private app = express();

    startServer(){

        this.app.use('/employees', employeesRouter)

        this.app.listen(port, ()=>{
            console.log('Listening on port ' + port)
        })
    }

}

new Server().startServer()