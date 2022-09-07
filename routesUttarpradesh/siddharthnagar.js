
const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/SiddharthNagar_read');

const {add_SiddharthNagar,add_Naugarh,add_Shohratgarh,add_Sahiyapur
 } = require('../src/controller/SiddharthNagar_Update.js');
router.post('/Bansi', add_SiddharthNagar);
router.post('/Naugarh', add_Naugarh);

router.post('/Shohratgarh',add_Shohratgarh);

router.post('/Sahiyapur',add_Sahiyapur);

router.get('/Bansi', (req, res) => {
  readdata.read_SiddharthNagar(function(datas) {
    res.render('uttarpradesh/SiddharthNagar/Bansi.hbs', {data: datas});
  });
});
router.get('/SiddharthNagar_all', (req, res) => {
  
    res.render('uttarpradesh/SiddharthNagar/SiddharthNagar_allmandi.hbs');
 
});
router.get('/Naugarh', (req, res) => {
  readdata.read_Naugarh(function(datas) {
    res.render('uttarpradesh/SiddharthNagar/Naugarh.hbs', {data: datas});
  });
});

router.get('/Naugarh', (req, res) => {
  readdata.read_Naugarh(function(datas) {
   res.render('uttarpradesh/SiddharthNagar/Naugarh.hbs', {data: datas});
  });
});
router.get('/Shohratgarh', (req, res) => {
  readdata.read_Shohratgarh(function(datas) {
   res.render('uttarpradesh/SiddharthNagar/Shohratgarh.hbs', {data: datas});
  });
});
router.get('/Sahiyapur', (req, res) => {
  readdata.read_Sahiyapur(function(datas) {
   res.render('uttarpradesh/SiddharthNagar/Sahiyapur.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Sahiyapur@4056', (req, res) => {
  readdata.read_Sahiyapur(function(datas) {
    res.render('uttarpradesh/SiddharthNagar/Sahiyapur_Update.hbs',{data: datas});
  });
});
router.get('/Naugarh2@768', (req, res) => {
  readdata.read_Naugarh(function(datas) {
    res.render('uttarpradesh/SiddharthNagar/Naugarh_Update.hbs',{data: datas} );
  });  
});
router.get('/Naugarh@129', (req, res) => {
  readdata.read_Naugarh(function(datas) {
   res.render('uttarpradesh/SiddharthNagar/Naugarh_Update.hbs',{data: datas} );
  }); 
});
router.get('/Shohratgarh@246', (req, res) => {
  readdata.read_Shohratgarh(function(datas) {
   res.render('uttarpradesh/SiddharthNagar/Shohratgarh_Update.hbs',{data: datas});
  });
});
router.get('/Bansi@246', (req, res) => {
    readdata.read_SiddharthNagar(function(datas) {
     res.render('uttarpradesh/SiddharthNagar/Bansi_Update.hbs',{data: datas});
    });
  });
module.exports = router;
