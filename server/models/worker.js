const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const workerSchema = new Schema({
    name: {
        type: String,
      
    },
    id: {
        type: String,
   
    },
    password: {
        type: String,
      
    },
    location: {
        type: String,
        default: "Jerusalem"
        
    },
    phoneNumber: {
        type: String,
        
    },
    email: {
        type: String,
       
    }
});
module.exports = worker = mongoose.model('worker', workerSchema);