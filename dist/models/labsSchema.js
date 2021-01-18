"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.LabsSchema = new mongoose_1.default.Schema({
    nome: { type: String },
    endereco: { type: String },
    status: {
        type: String,
        enum: ['ativo', 'inativo'],
        default: 'ativo'
    },
    exams: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'exams'
        }
    ]
});
