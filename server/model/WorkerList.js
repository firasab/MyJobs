const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const WorkerListSchema = new Schema({
    workerId:  { type: Schema.Types.ObjectId, ref: 'workers', required: true },
    workerName: {
        type: String,
    },
    email: {
        type: String,
    },
     password: {
        type: String,
    },
     id: {
        type: String,
        required: true
    },
     location: {
        type: String,
    },
    phoneNumber: {
        type: String,
    }
});

module.exports = WorkerList = mongoose.model('workerList', WorkerListSchema);