const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/JyotibaphuleNagar_read');

const {add_Amoroha,add_Dhanaura,add_Hasanpur,
 } = require('../src/controller/JyotibaphuleNagar_Update');
router.post('/Amroha', add_Amoroha);
router.post('/Dhanaura', add_Dhanaura);
router.post('/Hasanpur', add_Hasanpur);




router.get('/Amroha', (req, res) => {
  readdata.read_Amroha(function(datas) {
    res.render('uttarpradesh/JyotibaPhuleNagar/Amroha.hbs', {data: datas});
  });
});
router.get('/JyotibaPhuleNagar_all', (req, res) => {
  
    res.render('uttarpradesh/JyotibaPhuleNagar/JyotibaPhuleNagar_allmandi.hbs');
 
});

router.get('/Dhanaura', (req, res) => {
  readdata.read_Dhanaura(function(datas) {
   res.render('uttarpradesh/JyotibaPhuleNagar/Dhanaura.hbs', {data: datas});
  });
});
router.get('/Hasanpur', (req, res) => {
  readdata.read_Hasanpur(function(datas) {
   res.render('uttarpradesh/JyotibaPhuleNagar/Hasanpur.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Amroha@4056', (req, res) => {
  readdata.read_Amroha(function(datas) {
    res.render('uttarpradesh/JyotibaPhuleNagar/Amroha_Update.hbs',{data: datas});
  });
});

router.get('/Dhanaura@129', (req, res) => {
  readdata.read_Dhanaura(function(datas) {
   res.render('uttarpradesh/JyotibaPhuleNagar/Dhanaura_Update.hbs',{data: datas} );
  }); 
});
router.get('/Hasanpur@246', (req, res) => {
  readdata.read_Hasanpur(function(datas) {
   res.render('uttarpradesh/JyotibaPhuleNagar/Hasanpur_Update.hbs',{data: datas});
  });
});

module.exports = router;
