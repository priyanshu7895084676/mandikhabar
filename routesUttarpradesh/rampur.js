const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Rampur_read');

const {add_Bilaspur,add_Rampur,add_Shahabadrampur,add_Tandarampur,add_Milak
 } = require('../src/controller/Rampur_Update');
router.post('/Bilaspur', add_Bilaspur);
router.post('/Rampur', add_Rampur);
router.post('/Shahabadrampur', add_Shahabadrampur);
router.post('/Tandarampur',add_Tandarampur);

router.post('/Milak',add_Milak);

router.get('/Bilaspur', (req, res) => {
  readdata.read_Bilaspur(function(datas) {
    res.render('uttarpradesh/Rampur/Bilaspur.hbs', {data: datas});
  });
});
router.get('/Rampur_all', (req, res) => {
  
    res.render('uttarpradesh/Rampur/Rampur_allmandi.hbs');
 
});
router.get('/Rampur', (req, res) => {
  readdata.read_Rampur(function(datas) {
    res.render('uttarpradesh/Rampur/Rampur.hbs', {data: datas});
  });
});

router.get('/Shahabadrampur', (req, res) => {
  readdata.readk_Shahabadrampur(function(datas) {
   res.render('uttarpradesh/Rampur/Shahabadrampur.hbs', {data: datas});
  });
});
router.get('/Tandarampur', (req, res) => {
  readdata.read_Tandarampur(function(datas) {
   res.render('uttarpradesh/Rampur/Tandarampur.hbs', {data: datas});
  });
});

router.get('/Milak', (req, res) => {
  readdata.read_Milak(function(datas) {
   res.render('uttarpradesh/Rampur/Milak.hbs', {data: datas});
  });
});
// UPDATES
router.get('/Bilaspur@4056', (req, res) => {
  readdata.read_Bilaspur(function(datas) {
    res.render('uttarpradesh/Rampur/Bilaspur_Update.hbs',{data: datas});
  });
});
router.get('/Rampur2@768', (req, res) => {
  readdata.read_Rampur(function(datas) {
    res.render('uttarpradesh/Rampur/Rampur_Update.hbs',{data: datas} );
  });  
});
router.get('/Shahabadrampur@129', (req, res) => {
  readdata.readk_Shahabadrampur(function(datas) {
   res.render('uttarpradesh/Rampur/Shahabadrampur_Update.hbs',{data: datas} );
  }); 
});
router.get('/Tandarampur@246', (req, res) => {
  readdata.read_Tandarampur(function(datas) {
   res.render('uttarpradesh/Rampur/Tandarampur_Update.hbs',{data: datas});
  });
});
router.get('/Milak@246', (req, res) => {
    readdata.read_Milak(function(datas) {
     res.render('uttarpradesh/Rampur/Milak_Update.hbs',{data: datas});
    });
  });
module.exports = router;
