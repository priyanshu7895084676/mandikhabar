const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Azamgarh_read');

const {add_Azamgarh,
 } = require('../src/controller/Azamgarh_Update');
router.post('/Azamgarh', add_Azamgarh);




router.get('/Azamgarh', (req, res) => {
  readdata.read_Azamgarh(function(datas) {
    res.render('uttarpradesh/Azamgarh/Azamgarh.hbs', {data: datas});
  });
});
router.get('/Azamgarh_all', (req, res) => {
  
    res.render('uttarpradesh/Azamgarh/Azamgarh_allmandi.hbs');
 
});

// UPDATES
router.get('/Azamgarh@40533', (req, res) => {
  readdata.read_Azamgarh(function(datas) {
    res.render('uttarpradesh/Azamgarh/Azamgarh_Update.hbs',{data: datas});
  });
});



module.exports = router;
