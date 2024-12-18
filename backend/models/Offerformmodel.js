const mongoose = require('mongoose')
const offerformSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    makeanoffer:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    
    
})

const OfferForm = mongoose.model('offerform',offerformSchema)
module.exports = OfferForm
