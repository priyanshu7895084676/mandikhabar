const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Badayun_read');

const {add_Badayun, add_Bilsi,
  add_Bisauli,
  add_Dataganj,
  add_IslamNagar,
  add_Sahaswan,
  add_Ujhani,
  add_Wazirganj,
 } = require('../src/controller/Badayun_Update');
router.post('/Badayun', add_Badayun);
router.post('/Bilsi', add_Bilsi);
router.post('/Bisauli', add_Bisauli);
router.post('/Dataganj', add_Dataganj);
router.post('/Islamnagar', add_IslamNagar);
router.post('/Sahaswan', add_Sahaswan);
router.post('/Ujhani', add_Ujhani);
router.post('/Wazirganj', add_Wazirganj);


router.get('/badayun', (req, res) => {
  readdata.read_Badayun(function(datas) {
    res.render('uttarpradesh/Badayun/Badaun.hbs', {data: datas});
  });
});
router.get('/Badayun_all', (req, res) => {
  
    res.render('uttarpradesh/Badayun/Badayun_allmandi.hbs');
 
});
router.get('/bilsi', (req, res) => {
  readdata.read_Bilsi(function(datas) {
    res.render('uttarpradesh/Badayun/Bilsi.hbs', {data: datas});
  });
});

router.get('/bisauli', (req, res) => {
  readdata.read_Bisauli(function(datas) {
   res.render('uttarpradesh/Badayun/Bisauli.hbs', {data: datas});
  });
});
router.get('/dataganj', (req, res) => {
  readdata.read_Dataganj(function(datas) {
   res.render('uttarpradesh/Badayun/Dataganj.hbs', {data: datas});
  });
});
router.get('/islamnagar', (req, res) => {
 readdata.read_IslamNagar(function(datas) {
   res.render('uttarpradesh/Badayun/IslamNagar.hbs', {data: datas});
  });
});
router.get('/sahaswan', (req, res) => {
  readdata.read_Sahaswan(function(datas) {
    res.render('uttarpradesh/Badayun/Sahaswan.hbs', {data: datas});
  });
});
router.get('/ujhani', (req, res) => {
  readdata.read_Ujhani(function(datas) {
    res.render('uttarpradesh/Badayun/Ujhani.hbs', {data: datas});
  });
});
router.get('/wazirganj', (req, res) => {
  readdata.read_Wazirganj(function(datas) {
    res.render('uttarpradesh/Badayun/Wazirganj.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Badayun@456', (req, res) => {
  readdata.read_Badayun(function(datas) {
    res.render('uttarpradesh/Badayun/Badaun_Update.hbs',{data: datas});
  });
});
router.get('/bilsi@4541', (req, res) => {
  readdata.read_Bilsi(function(datas) {
    res.render('uttarpradesh/Badayun/Bilsi_Update.hbs',{data: datas} );
  });  
});
router.get('/bisauli@4512', (req, res) => {
  readdata.read_Bisauli(function(datas) {
   res.render('uttarpradesh/Badayun/Bisauli_Update.hbs',{data: datas} );
  }); 
});
router.get('/dataganj@451', (req, res) => {
  readdata.read_Dataganj(function(datas) {
   res.render('uttarpradesh/Badayun/Dataganj_Update.hbs',{data: datas});
  });
});
router.get('/islamnagar@1282', (req, res) => {
  readdata.read_IslamNagar(function(datas) {
    res.render('uttarpradesh/Badayun/IslamNagar_Update.hbs',{data: datas});
  });  
 });
router.get('/sahaswan@456734', (req, res) => {
  readdata.read_Sahaswan(function(datas) {
    res.render('uttarpradesh/Badayun/Sahaswan_Update.hbs',{data: datas});
  });
});
router.get('/ujhani9@7865', (req, res) => {
  readdata.read_Ujhani(function(datas) {
    res.render('uttarpradesh/Badayun/Ujhani_Update.hbs',{data: datas});
  });
});
router.get('/Wazirganj@4589', (req, res) => {
  readdata.read_Wazirganj(function(datas) {
    res.render('uttarpradesh/Badayun/Wazirganj_Update.hbs',{data: datas});
  }); 
});
module.exports = router;
