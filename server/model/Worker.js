const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const WorkerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true, 
        required: true
    },
    password: {
        type: String,
        required: true,
        min:4,
        max:20
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
