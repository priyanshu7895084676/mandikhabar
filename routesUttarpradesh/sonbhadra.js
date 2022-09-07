const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Sonbhadra_read');

const {add_Dudhi,add_Robertsganj
 } = require('../src/controller/Sonbhadra_Update');
router.post('/Dudhi', add_Dudhi);
router.post('/Robertsganj',add_Robertsganj);



router.get('/Dudhi', (req, res) => {
  readdata.read_Dudhi(function(datas) {
    res.render('uttarpradesh/Sonbhadra/Dudhi.hbs', {data: datas});
  });
});
router.get('/Sonbhadra_all', (req, res) => {
  
    res.render('uttarpradesh/Sonbhadra/Sonbhadra_allmandi.hbs');
 
});
router.get('/Robertsganj', (req, res) => {
  readdata.read_Robertsganj(function(datas) {
    res.render('uttarpradesh/Sonbhadra/Robertsganj.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Dudhi@40533', (req, res) => {
  readdata.read_Dudhi(function(datas) {
    res.render('uttarpradesh/Sonbhadra/Dudhi_Update.hbs',{data: datas});
  });
});
router.get('/Robertsganj@69', (req, res) => {
  readdata.read_Robertsganj(function(datas) {
    res.render('uttarpradesh/Sonbhadra/Robertsganj_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
