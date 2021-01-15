import express from 'express'
import ExamsController from '../controller/examsController'

const examsRouter = express.Router()

examsRouter.route('/').get(ExamsController.get);
examsRouter.route('/:id').get(ExamsController.getById);
examsRouter.route('/').post(ExamsController.create);
examsRouter.route('/:id').put(ExamsController.update);
examsRouter.route('/:id').delete(ExamsController.delete);

export default examsRouter


