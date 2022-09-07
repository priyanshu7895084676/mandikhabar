const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Chitrakoot_read');

const {add_Karwi,add_Mau
 } = require('../src/controller/Chitrakoot_Update');
router.post('/karwi', add_Karwi);
router.post('/Mau',add_Mau);



router.get('/Karwi', (req, res) => {
  readdata.read_Karwi(function(datas) {
    res.render('uttarpradesh/Chitrakoot Dham/Karwi.hbs', {data: datas});
  });
});
router.get('/Chitrakoot_all', (req, res) => {
  
    res.render('uttarpradesh/Chitrakoot/Chitrakoot_allmandi.hbs');
 
});
router.get('/Mau', (req, res) => {
  readdata.read_Mau(function(datas) {
    res.render('uttarpradesh/Chitrakoot/Mau.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Karwi@40533', (req, res) => {
  readdata.read_Karwi(function(datas) {
    res.render('uttarpradesh/Chitrakoot/Karwi_Update.hbs',{data: datas});
  });
});
router.get('/Mau@69', (req, res) => {
  readdata.read_Mau(function(datas) {
    res.render('uttarpradesh/Chitrakoot/Mau_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
