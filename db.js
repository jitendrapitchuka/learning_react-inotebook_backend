const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connection to mongo success")
    })
}
module.exports =connectToMongo;