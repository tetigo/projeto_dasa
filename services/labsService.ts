import mongoose from 'mongoose';
import { ILabsSchema } from '../models/labsSchema';
import LabsRepository from '../repository/labsRepository';

class LabsService {
    get() {
        return LabsRepository.find({});
    }

    getById(_id: mongoose.Types.ObjectId) {
        return LabsRepository.findById({ _id });

    }

    create(labs: ILabsSchema) {
        return LabsRepository.create(labs);
    }

    update(_id: mongoose.Types.ObjectId, labs: ILabsSchema) {
        return LabsRepository.findByIdAndUpdate(_id, labs)
    }

    delete(_id: mongoose.Types.ObjectId) {
        return LabsRepository.findByIdAndDelete(_id);
    }
}


export default new LabsService(); 