import express from 'express'
import LabsController from '../controller/labsController'

const labsRouter = express.Router()

labsRouter.route('/').get(LabsController.get);
labsRouter.route('/:id').get(LabsController.getById);
labsRouter.route('/').post(LabsController.create);
labsRouter.route('/:id').put(LabsController.update);
labsRouter.route('/:id').delete(LabsController.delete);

export default labsRouter


