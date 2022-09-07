const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Unnao_read');

const {add_Purwa,add_Bangamau, add_Unnao
 } = require('../src/controller/Unnao_Update');
router.post('/Purwa', add_Purwa);
router.post('/Bangarmau', add_Bangamau);
router.post('/Unnao',add_Unnao);




router.get('/Unnao', (req, res) => {
  readdata.read_Unnao(function(datas) {
    res.render('uttarpradesh/Unnao/Unnao.hbs', {data: datas});
  });
});
router.get('/Unnao_all', (req, res) => {
  
    res.render('uttarpradesh/Unnao/Unnao_allmandi.hbs');
 
});
router.get('/Purwa', (req, res) => {
  readdata.read_Purwa(function(datas) {
    res.render('uttarpradesh/Unnao/Purwa.hbs', {data: datas});
  });
});

router.get('/Bangarmau', (req, res) => {
  readdata.read_Bangamau(function(datas) {
   res.render('uttarpradesh/Unnao/Bangarmau.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Unnao@4056', (req, res) => {
  readdata.read_Unnao(function(datas) {
    res.render('uttarpradesh/Unnao/Unnao_Update.hbs',{data: datas});
  });
});
router.get('/Purwa@7698', (req, res) => {
  readdata.read_Purwa(function(datas) {
    res.render('uttarpradesh/Unnao/Purwa_Update.hbs',{data: datas} );
  });  
});
router.get('/Bangarmau@1299', (req, res) => {
  readdata.read_Bangamau(function(datas) {
   res.render('uttarpradesh/Unnao/Bangarmau_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
