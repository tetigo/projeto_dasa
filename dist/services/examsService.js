"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const examsRepository_1 = __importDefault(require("../repository/examsRepository"));
class ExamsService {
    get() {
        return examsRepository_1.default.find({});
    }
    getById(_id) {
        return examsRepository_1.default.findById({ _id });
    }
    getLabsByExamName(exam_name) {
        return examsRepository_1.default.findOne({ name: exam_name });
    }
    create(exams) {
        return examsRepository_1.default.create(exams);
    }
    update(_id, exams) {
        return examsRepository_1.default.findByIdAndUpdate(_id, exams);
    }
    delete(_id) {
        return examsRepository_1.default.findByIdAndDelete(_id);
    }
}
exports.default = new ExamsService();
