import express, { json, urlencoded } from 'express';
import cors from 'cors';

import Database from './infra/db';
import Auth from './infra/auth';
import router from './router';

class App {
    private _db: Database;
    public app: express.Application;

    constructor() {
        this._db = new Database();
        this._db.createConnection();
        this.app = express();
        this.middleware();
        this.routes();
    }
    enableCors() {
        const options: cors.CorsOptions = {
            methods: 'GET, POST, PUT, DELETE, OPTIONS',
            origin: '*'
        }
        this.app.use(cors(options))
    }
    middleware() {
        this.app.use(json())
        this.app.use(urlencoded({ extended: true }))
        this.enableCors()
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.json({ versao: '0.0.1' })
        })

        //JWT
        this.app.use(Auth.validate)

        //newsController
        this.app.use('/api/v1', router)
    }

}

export default new App();