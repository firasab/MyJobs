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
    timeWorkingSun:{
        type: String
    },
    isWorkingMon:{
        type: String
    },
    timeWorkingMon:{
        type: String
    },
    isWorkingTues:{
        type: String
    },
    timeWorkingTues:{
        type: String
    },
    isWorkingWed:{
        type: String
    },
    timeWorkingWed:{
        type: String
    },
    isWorkingThur:{
        type: String
    },
    timeWorkingThur:{
        type: String
    },
    isWorkingFri:{
        type: String
    },
    timeWorkingFri:{
        type: String
    },
    isWorkingSat:{
        type: String
    },
    timeWorkingSat:{
        type: String
    },
    dateStartWorking:{
        type: String
    },
    dateFinishWorking:{
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