import mongoose from 'mongoose';

export interface ILabsSchema extends mongoose.Document {
    nome: { type: String },
    endereco: { type: String },
    status: {
        type: String,
        enum: ['ativo', 'inativo'],
        default: 'ativo'
    },
    exams: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'exams'
        }
    ]
}

export const LabsSchema = new mongoose.Schema({
    nome: { type: String },
    endereco: { type: String },
    status: {
        type: String,
        enum: ['ativo', 'inativo'],
        default: 'ativo'
    },
    exams: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'exams'
        }
    ]
})



