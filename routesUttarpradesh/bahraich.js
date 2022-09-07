const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Bahraich_read');

const {add_Bahraich,add_Mihipurwa,add_Nanpara,add_Risia,add_Rupaidiha
 } = require('../src/controller/Bahraich_Update');
router.post('/Bahraich', add_Bahraich);
router.post('/Mihipurwa', add_Mihipurwa);
router.post('/Nanpara', add_Nanpara);
router.post('/Risia',add_Risia);

router.post('/Rupaidiha',add_Rupaidiha);

router.get('/bahraich', (req, res) => {
  readdata.read_Bahraich(function(datas) {
    res.render('uttarpradesh/Bahraich/Bahraich.hbs', {data: datas});
  });
});
router.get('/bahraich_all', (req, res) => {
  
    res.render('uttarpradesh/Bahraich/Bahraich_allmandi.hbs');
 
});
router.get('/Mihipurwa', (req, res) => {
  readdata.readk_Mihipurwa(function(datas) {
    res.render('uttarpradesh/Bahraich/Mihipurwa.hbs', {data: datas});
  });
});

router.get('/nanpara', (req, res) => {
  readdata.read_Nanpara(function(datas) {
   res.render('uttarpradesh/Bahraich/Nanpara.hbs', {data: datas});
  });
});
router.get('/risia', (req, res) => {
  readdata.read_Risia(function(datas) {
   res.render('uttarpradesh/Bahraich/Risia.hbs', {data: datas});
  });
});

router.get('/rupaidiha', (req, res) => {
  readdata.read_Rupaidiha(function(datas) {
   res.render('uttarpradesh/Bahraich/Rupaidiha.hbs', {data: datas});
  });
});

// UPDATES
router.get('/bahraich@4056', (req, res) => {
  readdata.read_Bahraich(function(datas) {
    res.render('uttarpradesh/Bahraich/Bahraich_Update.hbs',{data: datas});
  });
});
router.get('/Mihipurwa2@768', (req, res) => {
  readdata.readk_Mihipurwa(function(datas) {
    res.render('uttarpradesh/Bahraich/Mihipurwa_Update.hbs',{data: datas} );
  });  
});
router.get('/Nanpara@129', (req, res) => {
  readdata.read_Nanpara(function(datas) {
   res.render('uttarpradesh/Bahraich/Nanpara_Update.hbs',{data: datas} );
  }); 
});
router.get('/Risia@246', (req, res) => {
  readdata.read_Risia(function(datas) {
   res.render('uttarpradesh/Bahraich/Risia_Update.hbs',{data: datas});
  });
});
router.get('/Rupaidiha@246', (req, res) => {
    readdata.read_Rupaidiha(function(datas) {
     res.render('uttarpradesh/Bahraich/Rupaidiha_Update.hbs',{data: datas});
    });
  });
module.exports = router;
