"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const labsController_1 = __importDefault(require("../controller/labsController"));
const labsRouter = express_1.default.Router();
labsRouter.route('/').get(labsController_1.default.get);
labsRouter.route('/:id').get(labsController_1.default.getById);
labsRouter.route('/exams/:lab_name').get(labsController_1.default.getExamsByLabName);
labsRouter.route('/').post(labsController_1.default.create);
// labsRouter.route('/:exam_id').post(LabsController.createExam);
labsRouter.route('/:id').put(labsController_1.default.update);
labsRouter.route('/:id').delete(labsController_1.default.delete);
// labsRouter.route('/:lab_id/exam_id').delete(LabsController.deleteExam);
exports.default = labsRouter;
