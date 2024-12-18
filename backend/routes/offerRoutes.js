const express = require('express')
const OfferForm = require('../Controller/OfferForm')
const router = express.Router()
router.post('/offer',OfferForm.addoffer)
router.get('/alloffers',OfferForm.getalloffers)
module.exports = router