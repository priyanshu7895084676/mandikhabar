const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Moradabad_read');

const {add_Moradabad,add_Bahjoi,add_Chandausi,add_Sambhal,
 } = require('../src/controller/Moradabad_Update');
router.post('/Moradabad', add_Moradabad);
router.post('/Bahjoi', add_Bahjoi);
router.post('/Chandausi', add_Chandausi);
router.post('/Sambhal',add_Sambhal);



router.get('/Moradabad', (req, res) => {
  readdata.read_Moradabad(function(datas) {
    res.render('uttarpradesh/Moradabad/Moradabad.hbs', {data: datas});
  });
});
router.get('/Moradabad_all', (req, res) => {
  
    res.render('uttarpradesh/Moradabad/Moradabad_allmandi.hbs');
 
});
router.get('/Sambhal', (req, res) => {
  readdata.read_Sambhal(function(datas) {
    res.render('uttarpradesh/Moradabad/Sambhal.hbs', {data: datas});
  });
});

router.get('/Bahjoi', (req, res) => {
  readdata.read_Bahjoi(function(datas) {
   res.render('uttarpradesh/Moradabad/Bahjoi.hbs', {data: datas});
  });
});
router.get('/Chandausi', (req, res) => {
  readdata.read_Chandausi(function(datas) {
   res.render('uttarpradesh/Moradabad/Chandausi.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Moradabad@4056', (req, res) => {
  readdata.read_Moradabad(function(datas) {
    res.render('uttarpradesh/Moradabad/Moradabad_Update.hbs',{data: datas});
  });
});
router.get('/Sambhal@7698', (req, res) => {
  readdata.read_Sambhal(function(datas) {
    res.render('uttarpradesh/Moradabad/Sambhal_Update.hbs',{data: datas} );
  });  
});
router.get('/Bahjoi@129', (req, res) => {
  readdata.read_Bahjoi(function(datas) {
   res.render('uttarpradesh/Moradabad/Bahjoi_Update.hbs',{data: datas} );
  }); 
});
router.get('/Chandausi@246', (req, res) => {
  readdata.read_Chandausi(function(datas) {
   res.render('uttarpradesh/Moradabad/Chandausi_Update.hbs',{data: datas});
  });
});

module.exports = router;
