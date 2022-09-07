const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Sultanpur_read');

const {add_Sultanpur,
 } = require('../src/controller/Sultanpur_Update');
router.post('/Sultanpur', add_Sultanpur);




router.get('/Sultanpur', (req, res) => {
  readdata.read_Sultanpur(function(datas) {
    res.render('uttarpradesh/Sultanpur/Sultanpur.hbs', {data: datas});
  });
});
router.get('/Sultanpur_all', (req, res) => {
  
    res.render('uttarpradesh/Sultanpur/Sultanpur_allmandi.hbs');
 
});

// UPDATES
router.get('/Sultanpur@40533', (req, res) => {
  readdata.read_Sultanpur(function(datas) {
    res.render('uttarpradesh/Sultanpur/Sultanpur_Update.hbs',{data: datas});
  });
});



module.exports = router;
