const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const workerSchema = new Schema({
    name: {
        type: String,
      
    },
    id: {
        type: String,
   
    },
    location: {
        type: String,
        
    },
    phoneNumber: {
        type: String,
        
    },
    email: {
        type: String,
       
    },
    companyName: {
        type: String
    },
    workerImg:{
        type: String,
    },
    isWorkingSun:{
        type: String
    },
    isWorkingMon:{
        type: String
    },
    isWorkingTues:{
        type: String
    },
    isWorkingWed:{
        type: String
    },
    isWorkingThur:{
        type: String
    },
    isWorkingFri:{
        type: String
    },
    isWorkingSat:{
        type: String
    },
    password:{
        type: String
    },
    shifts: [
        {
         hourS: String,
         hourE:String ,
         date:String,
           
        }]
});
module.exports = worker = mongoose.model('worker', workerSchema);