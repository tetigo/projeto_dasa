import { HttpStatus } from "http-status";
import { IExamsSchema } from "../models/examsSchema";
import { ILabsSchema } from "../models/labsSchema";
import { Response } from 'express';

class Helper {
    sendResponse = (res: Response, statusCode: number, data: any) => {
        res.status(statusCode).json({ result: data })
    }
}

export default new Helper();