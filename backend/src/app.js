import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{
    constructor(){
        this.server = express();
     //  const connection_string = "aaaaa";
     //  mongoose.connect(connection_string, {
     //      useNewUrlParser: true,
     //      useUnifiedTopology: true,
     //  })

        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}
 
export default new App().server;