const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const companySchema = new Schema({
    name: {
        type: String,
      
    },
    field: {
        type: String,
      
    },
    numberOfWorker: {
        type: String,
      
    },
    address: {
        type: String,
        
    },
    companyImg: {
        type: String,
    }
});
module.exports = company = mongoose.model('company', companySchema);