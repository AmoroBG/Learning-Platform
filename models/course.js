// REQUIRE PACKAGES - EXTERNAL
const mongoose = require("mongoose");
const  Schema = mongoose.Schema
const courseSchema = new Schema({
    name:{
        type:String,
        require:true
    }, 
    description:{
        type:String,
        require:true
    },
    dateCreated:{
        type:Date,
        default:Date.now
    },
    creator: {
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }
    
})
const Course=mongoose.model("Course", courseSchema)
module.exports=Course
