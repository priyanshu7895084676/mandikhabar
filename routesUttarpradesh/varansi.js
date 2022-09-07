const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Varanasi_read');

const {add_Varanasi
 } = require('../src/controller/Varanasi_Update');
router.post('/Varanasi', add_Varanasi);




router.get('/Varanasi', (req, res) => {
  readdata.read_Varanasi(function(datas) {
    res.render('uttarpradesh/Varanasi/Varanasi.hbs', {data: datas});
  });
});
router.get('/Varanasi_all', (req, res) => {
  
    res.render('uttarpradesh/Varanasi/Varanasi_allmandi.hbs');
 
});

// UPDATES
router.get('/Varanasi@40533', (req, res) => {
  readdata.read_Varanasi(function(datas) {
    res.render('uttarpradesh/Varanasi/Varanasi_Update.hbs',{data: datas});
  });
});



module.exports = router;
