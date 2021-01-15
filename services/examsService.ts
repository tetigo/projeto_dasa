import mongoose from 'mongoose';
import { IExamsSchema } from '../models/examsSchema';
import ExamsRepository from '../repository/examsRepository';

class ExamsService {
    get() {
        return ExamsRepository.find({});
    }

    getById(_id: mongoose.Types.ObjectId) {
        return ExamsRepository.findById({ _id });

    }

    create(exams: IExamsSchema) {
        return ExamsRepository.create(exams);
    }

    update(_id: mongoose.Types.ObjectId, exams: IExamsSchema) {
        return ExamsRepository.findByIdAndUpdate(_id, exams)
    }

    delete(_id: mongoose.Types.ObjectId) {
        return ExamsRepository.findByIdAndDelete(_id);
    }
}


export default new ExamsService(); 