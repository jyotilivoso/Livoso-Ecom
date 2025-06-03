const mongoose = require('mongoose');
// const User=require('./UserModel')
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    },
    priority:{
        type:String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

});

const Taskmodel=mongoose.model('Task', taskSchema);
module.exports = Taskmodel;