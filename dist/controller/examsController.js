"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const examsService_1 = __importDefault(require("../services/examsService"));
const helper_1 = __importDefault(require("../infra/helper"));
const mongoose_1 = __importDefault(require("mongoose"));
class ExamsController {
    get(req, res) {
        examsService_1.default.get()
            .then(exams => helper_1.default.sendResponse(res, http_status_1.default.OK, exams))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    getById(req, res) {
        console.log('--->>', req.params);
        const _id = new mongoose_1.default.Types.ObjectId(req.params.id);
        examsService_1.default.getById(_id)
            .then(exams => helper_1.default.sendResponse(res, http_status_1.default.OK, exams))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    getLabsByExamName(req, res) {
        const exam_name = req.params.exam_name;
        examsService_1.default.getLabsByExamName(exam_name)
            .then(exam => helper_1.default.sendResponse(res, http_status_1.default.OK, exam === null || exam === void 0 ? void 0 : exam.labs))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    create(req, res) {
        const exams = req.body;
        examsService_1.default.create(exams)
            .then(exams => helper_1.default.sendResponse(res, http_status_1.default.OK, exams))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    update(req, res) {
        const _id = new mongoose_1.default.Types.ObjectId(req.params.id);
        const exams = req.body;
        examsService_1.default.update(_id, exams)
            .then(exams => helper_1.default.sendResponse(res, http_status_1.default.OK, 'atualizado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    delete(req, res) {
        const _id = new mongoose_1.default.Types.ObjectId(req.params.id);
        examsService_1.default.delete(_id)
            .then(exams => helper_1.default.sendResponse(res, http_status_1.default.OK, 'apagado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
}
exports.default = new ExamsController();
