const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Jhasi_read');

const {add_Jhasi, add_Baruasagar,
  add_Gursarai,
  add_Mauranipur,
  add_Moth,
  add_Chirgaon,
 
 } = require('../src/controller/Jhasi_Update');
router.post('/Jhasi', add_Jhasi);
router.post('/Baruasagar', add_Baruasagar);
router.post('/Gursarai', add_Gursarai);
router.post('/Mauranipur', add_Mauranipur);
router.post('/Moth', add_Moth);
router.post('/Chirgaon', add_Chirgaon);



router.get('/Jhasi', (req, res) => {
  readdata.read_Jhasi(function(datas) {
    res.render('uttarpradesh/Jhasi/Jhasi.hbs', {data: datas});
  });
});
router.get('/Jhasi_all', (req, res) => {
  
    res.render('uttarpradesh/Jhasi/Jhasi_allmandi.hbs');
 
});
router.get('/Baruasagar', (req, res) => {
  readdata.read_Baruasagar(function(datas) {
    res.render('uttarpradesh/Jhasi/Baruasagar.hbs', {data: datas});
  });
});

router.get('/Gursarai', (req, res) => {
  readdata.read_Gursarai(function(datas) {
   res.render('uttarpradesh/Jhasi/Gursarai.hbs', {data: datas});
  });
});
router.get('/Mauranipur', (req, res) => {
  readdata.read_Mauranipur(function(datas) {
   res.render('uttarpradesh/Jhasi/Mauranipur.hbs', {data: datas});
  });
});
router.get('/Moth', (req, res) => {
 readdata.read_Moth(function(datas) {
   res.render('uttarpradesh/Jhasi/Moth.hbs', {data: datas});
  });
});
router.get('/Chirgaon', (req, res) => {
  readdata.read_Chirgaon(function(datas) {
    res.render('uttarpradesh/Jhasi/Chirgaon.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Jhasi@456', (req, res) => {
  readdata.read_Jhasi(function(datas) {
    res.render('uttarpradesh/Jhasi/Jhasi_Update.hbs',{data: datas});
  });
});
router.get('/Baruasagar@4541', (req, res) => {
  readdata.read_Baruasagar(function(datas) {
    res.render('uttarpradesh/Jhasi/Baruasagar_Update.hbs',{data: datas} );
  });  
});
router.get('/Gursarai@4512', (req, res) => {
  readdata.read_Gursarai(function(datas) {
   res.render('uttarpradesh/Jhasi/Gursarai_Update.hbs',{data: datas} );
  }); 
});
router.get('/Mauranipur@451', (req, res) => {
  readdata.read_Mauranipur(function(datas) {
   res.render('uttarpradesh/Jhasi/Mauranipur_Update.hbs',{data: datas});
  });
});
router.get('/Moth@1282', (req, res) => {
  readdata.read_Moth(function(datas) {
    res.render('uttarpradesh/Jhasi/Moth_Update.hbs',{data: datas});
  });  
 });
router.get('/Chirgaon@456734', (req, res) => {
  readdata.read_Chirgaon(function(datas) {
    res.render('uttarpradesh/Jhasi/Chirgaon_Update.hbs',{data: datas});
  });
});

module.exports = router;