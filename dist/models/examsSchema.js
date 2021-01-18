"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ExamsSchema = new mongoose_1.default.Schema({
    nome: { type: String },
    tipo: {
        type: String,
        enum: ['analise clinica', 'imagem'],
        required: true
    },
    status: {
        type: String,
        enum: ['ativo', 'inativo'],
        default: 'ativo',
        required: true
    },
    labs: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'labs'
        }
    ]
});
