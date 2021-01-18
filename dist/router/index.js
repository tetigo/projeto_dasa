"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const examsRouter_1 = __importDefault(require("./examsRouter"));
const labsRouter_1 = __importDefault(require("./labsRouter"));
const router = express_1.default.Router();
router.use('/exams', examsRouter_1.default);
router.use('/labs', labsRouter_1.default);
exports.default = router;
