const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Fatehpur_read');

const {add_Fatehpur,add_Bindki,add_Jahanabad,add_Khaga,add_Kishanpur
 } = require('../src/controller/Fatehpur_Update');
router.post('/Fatehpur', add_Fatehpur);
router.post('/Bindki', add_Bindki);
router.post('/Jahanabad', add_Jahanabad);
router.post('/Khaga',add_Khaga);

router.post('/Kishanpur',add_Kishanpur);

router.get('/Fatehpur', (req, res) => {
  readdata.read_Fatehpur(function(datas) {
    res.render('uttarpradesh/Fatehpur/Fatehpur.hbs', {data: datas});
  });
});
router.get('/Fatehpur_all', (req, res) => {
  
    res.render('uttarpradesh/Fatehpur/Fatehpur_allmandi.hbs');
 
});
router.get('/Bindki', (req, res) => {
  readdata.read_Bindki(function(datas) {
    res.render('uttarpradesh/Fatehpur/Bindki.hbs', {data: datas});
  });
});

router.get('/Jahanabad', (req, res) => {
  readdata.readk_Jahanabad(function(datas) {
   res.render('uttarpradesh/Fatehpur/Jahanabad.hbs', {data: datas});
  });
});
router.get('/Khaga', (req, res) => {
  readdata.read_Khaga(function(datas) {
   res.render('uttarpradesh/Fatehpur/Khaga.hbs', {data: datas});
  });

});
router.get('/Kishanpur', (req, res) => {
  readdata.read_Kishanpur(function(datas) {
   res.render('uttarpradesh/Fatehpur/Kishanpur.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Fatehpur@4056', (req, res) => {
  readdata.read_Fatehpur(function(datas) {
    res.render('uttarpradesh/Fatehpur/Fatehpur_Update.hbs',{data: datas});
  });
});
router.get('/Bindki@768', (req, res) => {
  readdata.read_Bindki(function(datas) {
    res.render('uttarpradesh/Fatehpur/Bindki_Update.hbs',{data: datas} );
  });  
});
router.get('/Jahanabad@129', (req, res) => {
  readdata.readk_Jahanabad(function(datas) {
   res.render('uttarpradesh/Fatehpur/Jahanabad_Update.hbs',{data: datas} );
  }); 
});
router.get('/Khaga@246', (req, res) => {
  readdata.read_Khaga(function(datas) {
   res.render('uttarpradesh/Fatehpur/Khaga_Update.hbs',{data: datas});
  });
});
router.get('/Kishanpur@246', (req, res) => {
    readdata.read_Kishanpur(function(datas) {
     res.render('uttarpradesh/Fatehpur/Kishanpur_Update.hbs',{data: datas});
    });
  });
module.exports = router;
