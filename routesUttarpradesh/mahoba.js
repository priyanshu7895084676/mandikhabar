const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Mahoba_read');

const {add_Panwari,add_Chakhari, add_Mahoba
 } = require('../src/controller/Mahoba_Update');
router.post('/Panwari', add_Panwari);
router.post('/Chakhari', add_Chakhari);
router.post('/Mahoba',add_Mahoba);




router.get('/Mahoba', (req, res) => {
  readdata.read_Mahoba(function(datas) {
    res.render('uttarpradesh/Mahoba/Mahoba.hbs', {data: datas});
  });
});
router.get('/Mahoba_all', (req, res) => {
  
    res.render('uttarpradesh/Mahoba/Mahoba_allmandi.hbs');
 
});
router.get('/Panwari', (req, res) => {
  readdata.read_Panwari(function(datas) {
    res.render('uttarpradesh/Mahoba/Panwari.hbs', {data: datas});
  });
});

router.get('/Chakhari', (req, res) => {
  readdata.read_Chakhari(function(datas) {
   res.render('uttarpradesh/Mahoba/Charkhari.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Mahoba@4056', (req, res) => {
  readdata.read_Mahoba(function(datas) {
    res.render('uttarpradesh/Mahoba/Mahoba_Update.hbs',{data: datas});
  });
});
router.get('/Panwari@7698', (req, res) => {
  readdata.read_Panwari(function(datas) {
    res.render('uttarpradesh/Mahoba/Panwari_Update.hbs',{data: datas} );
  });  
});
router.get('/Chakhari@1299', (req, res) => {
  readdata.read_Chakhari(function(datas) {
   res.render('uttarpradesh/Mahoba/Chakhari_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
