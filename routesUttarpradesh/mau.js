const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Mau_read');

const {add_Kopanganj,add_Dohright,
 } = require('../src/controller/Mau_Update');

router.post('/Kopaganj', add_Kopanganj);
router.post('/Dohrighat', add_Dohright);




router.get('/Dohrighat', (req, res) => {
  readdata.read_Dohright(function(datas) {
    res.render('uttarpradesh/Mau/Dohrighat.hbs', {data: datas});
  });
});
router.get('/Mau_all', (req, res) => {
  
    res.render('uttarpradesh/Mau/Mau_allmandi.hbs');
 
});


router.get('/Kopanganj', (req, res) => {
  readdata.read_Kopanganj(function(datas) {
   res.render('uttarpradesh/Mau/Kopaganj.hbs', {data: datas});
  });
});
router.get('/Dohright', (req, res) => {
  readdata.read_Dohright(function(datas) {
   res.render('uttarpradesh/Mau/Dohrighat.hbs', {data: datas});
  });
});

// UPDATES


router.get('/Kopaganj@129', (req, res) => {
  readdata.read_Kopanganj(function(datas) {
   res.render('uttarpradesh/Mau/Kopaganj_Update.hbs',{data: datas} );
  }); 
});
router.get('/Dohright@246', (req, res) => {
  readdata.read_Dohright(function(datas) {
   res.render('uttarpradesh/Mau/Dohrighat_Update.hbs',{data: datas});
  });
});

module.exports = router;
