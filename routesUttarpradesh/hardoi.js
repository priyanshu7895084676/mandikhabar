const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Hardoi_read');

const {add_Hardoi,add_Madhoganj,add_Sandi,add_Sandila,add_Shahabadhardoi
 } = require('../src/controller/Hardoi_Update');
router.post('/Hardoi', add_Hardoi);
router.post('/Madhoganj', add_Madhoganj);
router.post('/Sandi', add_Sandi);
router.post('/Sandila',add_Sandila);

router.post('/Shahabadhardoi',add_Shahabadhardoi);

router.get('/Hardoi', (req, res) => {
  readdata.read_Hardoi(function(datas) {
    res.render('uttarpradesh/Hardoi/Hardoi.hbs', {data: datas});
  });
});
router.get('/Hardoi_all', (req, res) => {
  
    res.render('uttarpradesh/Hardoi/Hardoi_allmandi.hbs');
 
});
router.get('/Madhoganj', (req, res) => {
  readdata.read_Madhoganj(function(datas) {
    res.render('uttarpradesh/Hardoi/Madhoganj.hbs', {data: datas});
  });
});

router.get('/Sandi', (req, res) => {
  readdata.readk_Sandi(function(datas) {
   res.render('uttarpradesh/Hardoi/Sandi.hbs', {data: datas});
  });
});
router.get('/Sandila', (req, res) => {
  readdata.read_Sandila(function(datas) {
   res.render('uttarpradesh/Hardoi/Sandila.hbs', {data: datas});
  });
});

router.get('/Shahabadhardoi', (req, res) => {
  readdata.read_Shahabadhardoi(function(datas) {
   res.render('uttarpradesh/Hardoi/Shahabadhardoi.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Hardoi@4056', (req, res) => {
  readdata.read_Hardoi(function(datas) {
    res.render('uttarpradesh/Hardoi/Hardoi_Update.hbs',{data: datas});
  });
});
router.get('/Madhoganj2@768', (req, res) => {
  readdata.read_Madhoganj(function(datas) {
    res.render('uttarpradesh/Hardoi/Madhoganj_Update.hbs',{data: datas} );
  });  
});
router.get('/Sandi@129', (req, res) => {
  readdata.readk_Sandi(function(datas) {
   res.render('uttarpradesh/Hardoi/Sandi_Update.hbs',{data: datas} );
  }); 
});
router.get('/Sandila@246', (req, res) => {
  readdata.read_Sandila(function(datas) {
   res.render('uttarpradesh/Hardoi/Sandila_Update.hbs',{data: datas});
  });
});
router.get('/Shahabadhardoi@246', (req, res) => {
    readdata.read_Shahabadhardoi(function(datas) {
     res.render('uttarpradesh/Hardoi/Shahabadhardoi_Update.hbs',{data: datas});
    });
  });
module.exports = router;
