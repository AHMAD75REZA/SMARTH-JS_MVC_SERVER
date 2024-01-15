const mongoose = require('mongoose');

const itemDetailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    supplier_Info:{
        type: String,
        required: true
    },
    mfgDate:{
        type:Date,
        required:true
    },
    category:{
        ref: 'Category',
        type: mongoose.Types.ObjectId
    }
})

const itemDetails = mongoose.model('items', itemDetailSchema);
module.exports = itemDetails;