const { mongoose } = require('../db/mongoose');

var TodoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completedAt:{
        type:Number,
        default:null
    },
    _created:{
        type:Number,
        default:Date.now()
    }
});

module.exports = mongoose.model('Todo',TodoSchema);