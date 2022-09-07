const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Lucknow_read');

const {add_Lucknow,add_Banthra
 } = require('../src/controller/Lucknow_Update');
router.post('/Lucknow', add_Lucknow);
router.post('/Banthra',add_Banthra);



router.get('/Lucknow', (req, res) => {
  readdata.read_Lucknow(function(datas) {
    res.render('uttarpradesh/Lucknow/Lucknow.hbs', {data: datas});
  });
});
router.get('/Lucknow_all', (req, res) => {
  
    res.render('uttarpradesh/Lucknow/Lucknow_allmandi.hbs');
 
});
router.get('/Banthra', (req, res) => {
  readdata.read_Banthra(function(datas) {
    res.render('uttarpradesh/Lucknow/Banthra.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Lucknow*%$@40533', (req, res) => {
  readdata.read_Lucknow(function(datas) {
    res.render('uttarpradesh/Lucknow/Lucknow_Update.hbs',{data: datas});
  });
});
router.get('/Banthra@%69', (req, res) => {
  readdata.read_Banthra(function(datas) {
    res.render('uttarpradesh/Lucknow/Banthra_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
