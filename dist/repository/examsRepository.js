"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const examsSchema_1 = require("../models/examsSchema");
exports.default = mongoose_1.default.model('exams', examsSchema_1.ExamsSchema);
