import express, {Request, Response} from 'express'

const port = 3000;

export class Server {

    private app = express();

    startServer(){

        this.app.get('/hello', (req:Request, res: Response)=>{
            res.send('Hello!zzzz')
        })

        this.app.listen(port, ()=>{
            console.log('Listening on port ' + port)
        })
    }

}

new Server().startServer()