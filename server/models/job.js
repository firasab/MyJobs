const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const jobSchema = new Schema({
    name: {
        type: String,
      
    },
    discription: {
        type: String,
      
    },
    position: {
        type: String,
      
    },
    payPerHour: {
        type: String,
      
    },
    address: {
        type: String,
        
    }
});
module.exports = job = mongoose.model('job', jobSchema);