const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Gonda_read');

const {add_Gonda,add_Nawabganj
 } = require('../src/controller/Gonda_Update');
router.post('/Gonda', add_Gonda);
router.post('/Nawabganj',add_Nawabganj);



router.get('/Gonda', (req, res) => {
  readdata.read_Gonda(function(datas) {
    res.render('uttarpradesh/Gonda/Gonda.hbs', {data: datas});
  });
});
router.get('/Gonda_all', (req, res) => {
  
    res.render('uttarpradesh/Gonda/Gonda_allmandi.hbs');
 
});
router.get('/Nawabganj', (req, res) => {
  readdata.read_Nawabganj(function(datas) {
    res.render('uttarpradesh/Gonda/Nawabganj.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Gonda@40533', (req, res) => {
  readdata.read_Gonda(function(datas) {
    res.render('uttarpradesh/Gonda/Gonda_Update.hbs',{data: datas});
  });
});
router.get('/Nawabganj@69', (req, res) => {
  readdata.read_Nawabganj(function(datas) {
    res.render('uttarpradesh/Gonda/Nawabganj_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
