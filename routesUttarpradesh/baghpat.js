const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Baghpat_read');

const {add_Baraut,add_Khekra
 } = require('../src/controller/Baghapat_Update');
router.post('/Baraut', add_Baraut);
router.post('/Khekra',add_Khekra);



router.get('/baraut', (req, res) => {
  readdata.read_Baraut(function(datas) {
    res.render('uttarpradesh/Baghpat/baraut.hbs', {data: datas});
  });
});
router.get('/Baghpat_all', (req, res) => {
  
    res.render('uttarpradesh/Baghpat/Baghpat_allmandi.hbs');
 
});
router.get('/khekra', (req, res) => {
  readdata.read_Khekra(function(datas) {
    res.render('uttarpradesh/Baghpat/khekra.hbs', {data: datas});
  });
});


// UPDATES
router.get('/baraut@40533', (req, res) => {
  readdata.read_Baraut(function(datas) {
    res.render('uttarpradesh/Baghpat/baraut_Update.hbs',{data: datas});
  });
});
router.get('/khekra@694', (req, res) => {
  readdata.read_Khekra(function(datas) {
    res.render('uttarpradesh/Baghpat/Khekra_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
