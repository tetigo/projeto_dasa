import HttpStatus from 'http-status';
import LabsService from '../services/labsService';
import { ILabsSchema } from '../models/labsSchema';
import Helper from '../infra/helper';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import redis from 'redis';

class LabsController {
    get(req: Request, res: Response) {

        let client = redis.createClient(6379, 'redis')

        client.get('labs', (err, reply) => {
            if (reply) {
                console.log('redis')
                Helper.sendResponse(res, HttpStatus.OK, JSON.parse(reply))
            } else {
                LabsService.get()
                    .then(labs => {
                        console.log('mongo')
                        client.set('labs', JSON.stringify(labs))
                        client.expire('labs', 60)
                        Helper.sendResponse(res, HttpStatus.OK, labs)
                    })
                    .catch(err => console.error.bind(console, `error: ${err}`));
            }
        })

    }
    getById(req: Request, res: Response) {
        const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
        LabsService.getById(_id)
            .then(labs => Helper.sendResponse(res, HttpStatus.OK, labs))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    create(req: Request, res: Response) {
        const labs: ILabsSchema = req.body;
        LabsService.create(labs)
            .then(labs => Helper.sendResponse(res, HttpStatus.OK, labs))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    update(req: Request, res: Response) {
        const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
        const labs: ILabsSchema = req.body;
        LabsService.update(_id, labs)
            .then(labs => Helper.sendResponse(res, HttpStatus.OK, 'atualizado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    delete(req: Request, res: Response) {
        const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
        LabsService.delete(_id)
            .then(labs => Helper.sendResponse(res, HttpStatus.OK, 'apagado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
}

export default new LabsController();


