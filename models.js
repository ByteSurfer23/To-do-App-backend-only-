const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    time:{
        type:String,
        required:true
    },
    rem_stats:{
        type:String,
        required:true
    },
    comp_stats:{
        type:String,
        required:true,
        default:"no"
    }
});
module.exports = mongoose.model('mon',schema);

