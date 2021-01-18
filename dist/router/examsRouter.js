"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const examsController_1 = __importDefault(require("../controller/examsController"));
const examsRouter = express_1.default.Router();
examsRouter.route('/').get(examsController_1.default.get);
examsRouter.route('/:id').get(examsController_1.default.getById);
examsRouter.route('/labs/:exam_name').get(examsController_1.default.getLabsByExamName);
examsRouter.route('/').post(examsController_1.default.create);
examsRouter.route('/:id').put(examsController_1.default.update);
examsRouter.route('/:id').delete(examsController_1.default.delete);
exports.default = examsRouter;
