import mongoose from 'mongoose';
import { ExamsSchema, IExamsSchema } from '../models/examsSchema'


export default mongoose.model<IExamsSchema>('exams', ExamsSchema);