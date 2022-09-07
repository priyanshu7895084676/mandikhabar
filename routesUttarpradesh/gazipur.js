const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Gazipur_read');

const {add_Jamania,add_Jangipur,add_Saidpur,add_Yusufpur,
 } = require('../src/controller/Gazipur_Update');
router.post('/Jamania', add_Jamania);
router.post('/Jangipur', add_Jangipur);
router.post('/Saidpur', add_Saidpur);
router.post('/Yusufpur',add_Yusufpur);



router.get('/Jamania', (req, res) => {
  readdata.read_Jamania(function(datas) {
    res.render('uttarpradesh/Gazipur/Jamania.hbs', {data: datas});
  });
});
router.get('/Gazipur_all', (req, res) => {
  
    res.render('uttarpradesh/Gazipur/Gazipur_allmandi.hbs');
 
});
router.get('/Yusufpur', (req, res) => {
  readdata.read_Yusufpur(function(datas) {
    res.render('uttarpradesh/Gazipur/Yusufpur.hbs', {data: datas});
  });
});

router.get('/Jangipur', (req, res) => {
  readdata.read_Jangipur(function(datas) {
   res.render('uttarpradesh/Gazipur/Jangipur.hbs', {data: datas});
  });
});
router.get('/Saidpur', (req, res) => {
  readdata.read_Saidpur(function(datas) {
   res.render('uttarpradesh/Gazipur/Saidpur.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Jamania@4056', (req, res) => {
  readdata.read_Jamania(function(datas) {
    res.render('uttarpradesh/Gazipur/Jamania_Update.hbs',{data: datas});
  });
});
router.get('/Yusufpur@7698', (req, res) => {
  readdata.read_Yusufpur(function(datas) {
    res.render('uttarpradesh/Gazipur/Yusufpur_Update.hbs',{data: datas} );
  });  
});
router.get('/Jangipur@129', (req, res) => {
  readdata.read_Jangipur(function(datas) {
   res.render('uttarpradesh/Gazipur/Jangipur_Update.hbs',{data: datas} );
  }); 
});
router.get('/Saidpur@246', (req, res) => {
  readdata.read_Saidpur(function(datas) {
   res.render('uttarpradesh/Gazipur/Saidpur_Update.hbs',{data: datas});
  });
});

module.exports = router;
