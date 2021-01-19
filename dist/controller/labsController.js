"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const labsService_1 = __importDefault(require("../services/labsService"));
const helper_1 = __importDefault(require("../infra/helper"));
const mongoose_1 = __importDefault(require("mongoose"));
class LabsController {
    get(req, res) {
        labsService_1.default.get()
            .then(labs => helper_1.default.sendResponse(res, http_status_1.default.OK, labs))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    getById(req, res) {
        const _id = new mongoose_1.default.Types.ObjectId(req.params.id);
        labsService_1.default.getById(_id)
            .then(labs => helper_1.default.sendResponse(res, http_status_1.default.OK, labs))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    getExamsByLabName(req, res) {
        const lab_name = req.params.lab_name;
        labsService_1.default.getExamsByLabName(lab_name)
            .then(lab => helper_1.default.sendResponse(res, http_status_1.default.OK, lab === null || lab === void 0 ? void 0 : lab.exams))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    create(req, res) {
        const labs = req.body;
        labsService_1.default.create(labs)
            .then(labs => helper_1.default.sendResponse(res, http_status_1.default.OK, labs))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    update(req, res) {
        const _id = new mongoose_1.default.Types.ObjectId(req.params.id);
        const labs = req.body;
        labsService_1.default.update(_id, labs)
            .then(labs => helper_1.default.sendResponse(res, http_status_1.default.OK, 'atualizado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    delete(req, res) {
        const _id = new mongoose_1.default.Types.ObjectId(req.params.id);
        labsService_1.default.delete(_id)
            .then(labs => helper_1.default.sendResponse(res, http_status_1.default.OK, 'apagado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
}
exports.default = new LabsController();
