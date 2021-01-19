import express from 'express'
import LabsController from '../controller/labsController'

const labsRouter = express.Router()

labsRouter.route('/').get(LabsController.get);
labsRouter.route('/:id').get(LabsController.getById);
labsRouter.route('/exams/:lab_name').get(LabsController.getExamsByLabName);
labsRouter.route('/').post(LabsController.create);
// labsRouter.route('/:exam_id').post(LabsController.createExam);
labsRouter.route('/:id').put(LabsController.update);
labsRouter.route('/:id').delete(LabsController.delete);
// labsRouter.route('/:lab_id/exam_id').delete(LabsController.deleteExam);

export default labsRouter


