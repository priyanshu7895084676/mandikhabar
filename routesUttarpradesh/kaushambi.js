const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Kaushambi_read');

const {add_Ajuha,add_Bharwari,add_Manjhanpur,
 } = require('../src/controller/Kaushambi_Update');
router.post('/Ajuha', add_Ajuha);
router.post('/Bharwari', add_Bharwari);
router.post('/Manjhanpur', add_Manjhanpur);




router.get('/Ajuha', (req, res) => {
  readdata.read_Ajhuha(function(datas) {
    res.render('uttarpradesh/Kaushambi/Ajuha.hbs', {data: datas});
  });
});
router.get('/Kaushambi_all', (req, res) => {
  
    res.render('uttarpradesh/Kaushambi/Kaushambi_allmandi.hbs');
 
});


router.get('/Bharwari', (req, res) => {
  readdata.read_Bharwari(function(datas) {
   res.render('uttarpradesh/Kaushambi/Bharwari.hbs', {data: datas});
  });
});
router.get('/Manjhanpur', (req, res) => {
  readdata.read_Manjhanpur(function(datas) {
   res.render('uttarpradesh/Kaushambi/Manjhanpur.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Ajuha@4056', (req, res) => {
  readdata.read_Ajhuha(function(datas) {
    res.render('uttarpradesh/Kaushambi/Ajuha_Update.hbs',{data: datas});
  });
});
 

router.get('/Bharwari@129', (req, res) => {
  readdata.read_Bharwari(function(datas) {
   res.render('uttarpradesh/Kaushambi/Bharwari_Update.hbs',{data: datas} );
  }); 
});
router.get('/Manjhanpur@246', (req, res) => {
  readdata.read_Manjhanpur(function(datas) {
   res.render('uttarpradesh/Kaushambi/Manjhanpur_Update.hbs',{data: datas});
  });
});

module.exports = router;
