const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Muzaffarnagar_read');

const {add_Muzaffarnagar, add_Kairana,
  add_Kandhla,
  add_Khatauli,
  add_Shahpur,
  add_Shamli,
  add_Thanabhawan,
  
 } = require('../src/controller/Muzaffarnagar_Update');
router.post('/Muzaffarnagar', add_Muzaffarnagar);
router.post('/Kairana', add_Kairana);
router.post('/Kandhla', add_Kandhla);
router.post('/Khatauli', add_Khatauli);
router.post('/Shahpur', add_Shahpur);
router.post('/Shamli', add_Shamli);
router.post('/Thanabhawan', add_Thanabhawan);



router.get('/Muzaffarnagar', (req, res) => {
  readdata.read_Muzaffarnagar(function(datas) {
    res.render('uttarpradesh/Muzaffarnagar/Muzaffarnagar.hbs', {data: datas});
  });
});
router.get('/Muzaffarnagar_all', (req, res) => {
  
    res.render('uttarpradesh/Muzaffarnagar/Muzaffarnagar_allmandi.hbs');
 
});
router.get('/Kairana', (req, res) => {
  readdata.read_Kairana(function(datas) {
    res.render('uttarpradesh/Muzaffarnagar/Kairana.hbs', {data: datas});
  });
});

router.get('/Kandhla', (req, res) => {
  readdata.read_Kandhla(function(datas) {
   res.render('uttarpradesh/Muzaffarnagar/Kandhla.hbs', {data: datas});
  });
});
router.get('/Khatauli', (req, res) => {
  readdata.read_Khatauli(function(datas) {
   res.render('uttarpradesh/Muzaffarnagar/Khatauli.hbs', {data: datas});
  });
});
router.get('/Shahpur', (req, res) => {
 readdata.read_Shahpur(function(datas) {
   res.render('uttarpradesh/Muzaffarnagar/Shahpur.hbs', {data: datas});
  });
});
router.get('/Shamli', (req, res) => {
  readdata.read_Shamli(function(datas) {
    res.render('uttarpradesh/Muzaffarnagar/Shamli.hbs', {data: datas});
  });
});
router.get('/Thanabhawan', (req, res) => {
  readdata.read_Thanabhawan(function(datas) {
    res.render('uttarpradesh/Muzaffarnagar/Thanabhawan.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Muzaffarnagar@456', (req, res) => {
  readdata.read_Muzaffarnagar(function(datas) {
    res.render('uttarpradesh/Muzaffarnagar/Muzaffarnagar_Update.hbs',{data: datas});
  });
});
router.get('/Kairana@4541', (req, res) => {
  readdata.read_Kairana(function(datas) {
    res.render('uttarpradesh/Muzaffarnagar/Kairana_Update.hbs',{data: datas} );
  });  
});
router.get('/Kandhla@4512', (req, res) => {
  readdata.read_Kandhla(function(datas) {
   res.render('uttarpradesh/Muzaffarnagar/Kandhla_Update.hbs',{data: datas} );
  }); 
});
router.get('/Khatauli@451', (req, res) => {
  readdata.read_Khatauli(function(datas) {
   res.render('uttarpradesh/Muzaffarnagar/Khatauli_Update.hbs',{data: datas});
  });
});
router.get('/Shahpur@1282', (req, res) => {
  readdata.read_Shahpur(function(datas) {
    res.render('uttarpradesh/Muzaffarnagar/Shahpur_Update.hbs',{data: datas});
  });  
 });
router.get('/Shamli@456734', (req, res) => {
  readdata.read_Shamli(function(datas) {
    res.render('uttarpradesh/Muzaffarnagar/Shamli_Update.hbs',{data: datas});
  });
});
router.get('/Thanabhawan9@7865', (req, res) => {
  readdata.read_Thanabhawan(function(datas) {
    res.render('uttarpradesh/Muzaffarnagar/Thanabhawan_Update.hbs',{data: datas});
  });
});

module.exports = router;
