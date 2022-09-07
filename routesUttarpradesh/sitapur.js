const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Sitapur_read');

const {add_Sitapur, add_Biswan,
  add_Hargaon,
  add_Mahmudabad,
  add_Maholi,
  add_Mishrit,
  add_Sidhauli,
  
 } = require('../src/controller/Sitapur_Update');
router.post('/Sitapur', add_Sitapur);
router.post('/Biswan', add_Biswan);
router.post('/Hargaon', add_Hargaon);
router.post('/Mahmudabad', add_Mahmudabad);
router.post('/Maholi', add_Maholi);
router.post('/Mishrit', add_Mishrit);
router.post('/Sidhauli', add_Sidhauli);



router.get('/Sitapur', (req, res) => {
  readdata.read_Sitapur(function(datas) {
    res.render('uttarpradesh/Sitapur/Sitapur.hbs', {data: datas});
  });
});
router.get('/Sitapur_all', (req, res) => {
  
    res.render('uttarpradesh/Sitapur/Sitapur_allmandi.hbs');
 
});
router.get('/Biswan', (req, res) => {
  readdata.read_Biswan(function(datas) {
    res.render('uttarpradesh/Sitapur/Biswan.hbs', {data: datas});
  });
});

router.get('/Hargaon', (req, res) => {
  readdata.read_Hargaon(function(datas) {
   res.render('uttarpradesh/Sitapur/Hargaon.hbs', {data: datas});
  });
});
router.get('/Mahmudabad', (req, res) => {
  readdata.read_Mahmudabad(function(datas) {
   res.render('uttarpradesh/Sitapur/Mahmudabad.hbs', {data: datas});
  });
});
router.get('/Maholi', (req, res) => {
 readdata.read_Maholi(function(datas) {
   res.render('uttarpradesh/Sitapur/Maholi.hbs', {data: datas});
  });
});
router.get('/Mishrit', (req, res) => {
  readdata.read_Mishrit(function(datas) {
    res.render('uttarpradesh/Sitapur/Mishrit.hbs', {data: datas});
  });
});
router.get('/Sidhauli', (req, res) => {
  readdata.read_Sidhauli(function(datas) {
    res.render('uttarpradesh/Sitapur/Sidhauli.hbs', {data: datas});
  });
});
router.get('/wazirganj', (req, res) => {
  readdata.readShamshabad(function(datas) {
    res.render('uttarpradesh/Sitapur/Wazirganj.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Sitapur@456', (req, res) => {
  readdata.read_Sitapur(function(datas) {
    res.render('uttarpradesh/Sitapur/Sitapur_Update.hbs',{data: datas});
  });
});
router.get('/Biswan@4541', (req, res) => {
  readdata.read_Biswan(function(datas) {
    res.render('uttarpradesh/Sitapur/Biswan_Update.hbs',{data: datas} );
  });  
});
router.get('/Hargaon@4512', (req, res) => {
  readdata.read_Hargaon(function(datas) {
   res.render('uttarpradesh/Sitapur/Hargaon_Update.hbs',{data: datas} );
  }); 
});
router.get('/Mahmudabad@451', (req, res) => {
  readdata.read_Mahmudabad(function(datas) {
   res.render('uttarpradesh/Sitapur/Mahmudabad_Update.hbs',{data: datas});
  });
});
router.get('/Maholi@1282', (req, res) => {
  readdata.read_Maholi(function(datas) {
    res.render('uttarpradesh/Sitapur/Maholi_Update.hbs',{data: datas});
  });  
 });
router.get('/Mishrit@456734', (req, res) => {
  readdata.read_Mishrit(function(datas) {
    res.render('uttarpradesh/Sitapur/Mishrit_Update.hbs',{data: datas});
  });
});
router.get('/Sidhauli9@7865', (req, res) => {
  readdata.read_Sidhauli(function(datas) {
    res.render('uttarpradesh/Sitapur/Sidhauli_Update.hbs',{data: datas});
  });
});

module.exports = router;
