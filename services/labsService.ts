import mongoose from 'mongoose';
import { ILabsSchema } from '../models/labsSchema';
import { IExamsSchema } from '../models/examsSchema';
import LabsRepository from '../repository/labsRepository';

class LabsService {
    get() {
        return LabsRepository.find({});
    }

    getById(_id: mongoose.Types.ObjectId) {
        return LabsRepository.findById({ _id });
    }

    getExamsByLabName(lab_name: string) {
        return LabsRepository.findOne({ name: lab_name });
    }

    create(labs: ILabsSchema) {
        return LabsRepository.create(labs);
    }

    update(_id: mongoose.Types.ObjectId, labs: ILabsSchema) {
        return LabsRepository.findByIdAndUpdate(_id, labs)
    }

    updateLabExams(lab_id: mongoose.Types.ObjectId, exam: IExamsSchema) {
        return LabsRepository.findByIdAndUpdate(lab_id, {
            $push: {
                exams: exam?._id
            }
        })
    }

    delete(_id: mongoose.Types.ObjectId) {
        return LabsRepository.findByIdAndDelete(_id);
    }
}


export default new LabsService(); 