import HttpStatus from 'http-status';
import ExamsService from '../services/examsService';
import { IExamsSchema } from '../models/examsSchema';
import Helper from '../infra/helper';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import redis from 'redis';

class ExamsController {
    get(req: Request, res: Response) {

        let client = redis.createClient(6379, 'redis')

        client.get('exams', (err, reply) => {
            if (reply) {
                console.log('redis')
                Helper.sendResponse(res, HttpStatus.OK, JSON.parse(reply))
            } else {
                ExamsService.get()
                    .then(exams => {
                        console.log('mongo')
                        client.set('exams', JSON.stringify(exams))
                        client.expire('exams', 60)
                        Helper.sendResponse(res, HttpStatus.OK, exams)
                    })
                    .catch(err => console.error.bind(console, `error: ${err}`));
            }
        })

    }
    getById(req: Request, res: Response) {
        const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
        ExamsService.getById(_id)
            .then(exams => Helper.sendResponse(res, HttpStatus.OK, exams))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    create(req: Request, res: Response) {
        const exams: IExamsSchema = req.body;
        ExamsService.create(exams)
            .then(exams => Helper.sendResponse(res, HttpStatus.OK, exams))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    update(req: Request, res: Response) {
        const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
        const exams: IExamsSchema = req.body;
        ExamsService.update(_id, exams)
            .then(exams => Helper.sendResponse(res, HttpStatus.OK, 'atualizado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    delete(req: Request, res: Response) {
        const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
        ExamsService.delete(_id)
            .then(exams => Helper.sendResponse(res, HttpStatus.OK, 'apagado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
}

export default new ExamsController();


