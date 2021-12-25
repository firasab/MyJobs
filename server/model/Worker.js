const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const WorkerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phoneNumber: { 
        type: String,
        required: true
    }
});

module.exports = Worker = mongoose.model('workers', WorkerSchema);
