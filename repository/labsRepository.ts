import mongoose from 'mongoose';
import { LabsSchema, ILabsSchema } from '../models/labsSchema'


export default mongoose.model<ILabsSchema>('labs', LabsSchema);