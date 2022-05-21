const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//job model
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
        
    },
    jobImg:{
        type: String,
        default: "AA"
    },
});
module.exports = job = mongoose.model('job', jobSchema);