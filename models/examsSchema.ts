import mongoose from 'mongoose';

export interface IExamsSchema extends mongoose.Document {
    nome: { type: String },
    tipo: {
        type: String,
        enum: ['analise clinica', 'imagem'],
    },
    status: {
        type: String,
        enum: ['ativo', 'inativo'],
        default: 'ativo'
    },
    labs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'labs'
        }
    ]

}

export const ExamsSchema = new mongoose.Schema({
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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'labs'
        }
    ]
})



