"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const labsRepository_1 = __importDefault(require("../repository/labsRepository"));
class LabsService {
    get() {
        return labsRepository_1.default.find({});
    }
    getById(_id) {
        return labsRepository_1.default.findById({ _id });
    }
    getExamsByLabName(lab_name) {
        return labsRepository_1.default.findOne({ name: lab_name });
    }
    create(labs) {
        return labsRepository_1.default.create(labs);
    }
    update(_id, labs) {
        return labsRepository_1.default.findByIdAndUpdate(_id, labs);
    }
    updateLabExams(lab_id, exam) {
        return labsRepository_1.default.findByIdAndUpdate(lab_id, {
            $push: {
                exams: exam === null || exam === void 0 ? void 0 : exam._id
            }
        });
    }
    delete(_id) {
        return labsRepository_1.default.findByIdAndDelete(_id);
    }
}
exports.default = new LabsService();
