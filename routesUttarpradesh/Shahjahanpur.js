const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Shahjahanpur_read');

const {add_Shahjahanpur,add_Jalalabad,add_Meeranpurkatra,add_Powanyan,add_Tilhar
 } = require('../src/controller/Shahjahanpur_Update');
router.post('/Shahjahanpur', add_Shahjahanpur);
router.post('/Jalalabad', add_Jalalabad);
router.post('/MeeranpurKatra', add_Meeranpurkatra);
router.post('/Powanyan',add_Powanyan);

router.post('/Tilhar',add_Tilhar);

router.get('/Shahjahanpur', (req, res) => {
  readdata.read_Shahjahanpur(function(datas) {
    res.render('uttarpradesh/Shahjahanpur/Shahjahanpur.hbs', {data: datas});
  });
});
router.get('/Shahjahanpur_all', (req, res) => {
  
    res.render('uttarpradesh/Shahjahanpur/Shahjahanpur_allmandi.hbs');
 
});
router.get('/Jalalabad', (req, res) => {
  readdata.read_Jalalabad(function(datas) {
    res.render('uttarpradesh/Shahjahanpur/Jalalabad.hbs', {data: datas});
  });
});

router.get('/MeeranpurKatra', (req, res) => {
  readdata.read_MeeranpurKatra(function(datas) {
   res.render('uttarpradesh/Shahjahanpur/MeeranpurKatra.hbs', {data: datas});
  });
});
router.get('/Powayan', (req, res) => {
  readdata.readk_Powayan(function(datas) {
   res.render('uttarpradesh/Shahjahanpur/Powayan.hbs', {data: datas});
  });
});

router.get('/Tilhar', (req, res) => {
  readdata.read_Tilhar(function(datas) {
   res.render('uttarpradesh/Shahjahanpur/Tilhar.hbs', {data: datas});
  });
});
// UPDATES
router.get('/Shahjahanpur@4056', (req, res) => {
  readdata.read_Shahjahanpur(function(datas) {
    res.render('uttarpradesh/Shahjahanpur/Shahjahanpur_Update.hbs',{data: datas});
  });
});
router.get('/Jalalabad2@768', (req, res) => {
  readdata.read_Jalalabad(function(datas) {
    res.render('uttarpradesh/Shahjahanpur/Jalalabad_Update.hbs',{data: datas} );
  });  
});
router.get('/MeeranpurKatra@129', (req, res) => {
  readdata.read_MeeranpurKatra(function(datas) {
   res.render('uttarpradesh/Shahjahanpur/MeeranpurKatra_Update.hbs',{data: datas} );
  }); 
});
router.get('/Powayan@246', (req, res) => {
  readdata.readk_Powayan(function(datas) {
   res.render('uttarpradesh/Shahjahanpur/Powanyan_Update.hbs',{data: datas});
  });
});
router.get('/Tilhar@246', (req, res) => {
    readdata.read_Tilhar(function(datas) {
     res.render('uttarpradesh/Shahjahanpur/Tilhar_Update.hbs',{data: datas});
    });
  });
module.exports = router;
