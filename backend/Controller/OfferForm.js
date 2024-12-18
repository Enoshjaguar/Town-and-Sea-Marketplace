const express = require('express')
const OfferForm = require('../models/Offerformmodel')
const addoffer = async(req,res)=>{
    try {
        const {productName,productPrice,makeanoffer,reason} = req.body
        const NewOffer = new OfferForm({
            productName,productPrice,
            makeanoffer,reason
        })
        const savedoffer =await NewOffer.save()
        console.log("offer saved siccessfully");
        
        return res.status(200).json({message:"offer saved successfully"})
    } catch (error) {
        console.log(error,'error saving data');
        
        return res.status(400).json({message:"offer saving failed"})
        
    }

}

const getalloffers = async(req,res)=>{
    try {
        const offers = await OfferForm.find()
        return res.status(200).json(offers)
    } catch (error) {
        console.log(error)
        return res.status(404).json({message:"failed"})
    }
}

module.exports = {addoffer,getalloffers}