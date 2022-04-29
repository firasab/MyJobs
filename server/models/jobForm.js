const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const jobFormSchema = new Schema({
    name: {
        type: String,
      
    },
    jobName: {
        type: String,
      
    },
    id: {
        type: String,
      
    },
    phone: {
        type: String,
      
    },
    address: {
        type: String,
      
    },
    description: {
        type: String,
      
    },
    formImg: {
        type: String,
    }
    ,
    email: {
        type: String,
    }
});
module.exports = jobForm = mongoose.model('jobForm', jobFormSchema);