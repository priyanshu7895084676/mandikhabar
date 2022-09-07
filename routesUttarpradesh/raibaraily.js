const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Raibaraily_read');

const {add_Raibaraily,add_Lalganj,add_Bachhrawan,add_Salon,
 } = require('../src/controller/Raibaraily_Update');
router.post('/Raibaraily', add_Raibaraily);
router.post('/Lalganj', add_Lalganj);
router.post('/Bachhrawan', add_Bachhrawan);
router.post('/Salon',add_Salon);



router.get('/Raibaraily', (req, res) => {
  readdata.read_Raibaraily(function(datas) {
    res.render('uttarpradesh/Raibaraily/Raibareli.hbs', {data: datas});
  });
});
router.get('/Raibaraily_all', (req, res) => {
  
    res.render('uttarpradesh/Raibaraily/Raibareily_allmandi.hbs');
 
});
router.get('/Salon', (req, res) => {
  readdata.read_Salon(function(datas) {
    res.render('uttarpradesh/Raibaraily/Salon.hbs', {data: datas});
  });
});

router.get('/Lalganj', (req, res) => {
  readdata.read_Lalganj(function(datas) {
   res.render('uttarpradesh/Raibaraily/Lalganj.hbs', {data: datas});
  });
});
router.get('/Bachhrawan', (req, res) => {
  readdata.read_Bachhrawan(function(datas) {
   res.render('uttarpradesh/Raibaraily/Bachhrawan.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Raibaraily@4056', (req, res) => {
  readdata.read_Raibaraily(function(datas) {
    res.render('uttarpradesh/Raibaraily/Raibareli_Update.hbs',{data: datas});
  });
});
router.get('/Salon@7698', (req, res) => {
  readdata.read_Salon(function(datas) {
    res.render('uttarpradesh/Raibaraily/Salon_Update.hbs',{data: datas} );
  });  
});
router.get('/Lalganj@129', (req, res) => {
  readdata.read_Lalganj(function(datas) {
   res.render('uttarpradesh/Raibaraily/Lalganj_Update.hbs',{data: datas} );
  }); 
});
router.get('/Bachhrawan@246', (req, res) => {
  readdata.read_Bachhrawan(function(datas) {
   res.render('uttarpradesh/Raibaraily/Bachhrawan_Update.hbs',{data: datas});
  });
});

module.exports = router;
