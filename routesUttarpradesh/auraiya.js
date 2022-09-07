const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Auraiya_read');

const {add_Achhalda,add_Dibiyapur, add_Auraiya
 } = require('../src/controller/Auraiya_Update');
router.post('/Achhalda', add_Achhalda);
router.post('/Dibiyapur', add_Dibiyapur);
router.post('/Auraiya',add_Auraiya);




router.get('/auraiya', (req, res) => {
  readdata.read_Auraiya(function(datas) {
    res.render('uttarpradesh/Auraiya/Auraiya.hbs', {data: datas});
  });
});
router.get('/auraiya_all', (req, res) => {
  
    res.render('uttarpradesh/Auraiya/Auraiya_allmandi.hbs');
 
});
router.get('/achhalda', (req, res) => {
  readdata.read_Achhalda(function(datas) {
    res.render('uttarpradesh/Auraiya/Achhalda.hbs', {data: datas});
  });
});

router.get('/dibiyapur', (req, res) => {
  readdata.read_Dibiyapur(function(datas) {
   res.render('uttarpradesh/Auraiya/Dibiyapur.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Auraiya@4056', (req, res) => {
  readdata.read_Auraiya(function(datas) {
    res.render('uttarpradesh/Auraiya/Auraiya_Update.hbs',{data: datas});
  });
});
router.get('/achhalda@7698', (req, res) => {
  readdata.read_Achhalda(function(datas) {
    res.render('uttarpradesh/Auraiya/Achhalda_Update.hbs',{data: datas} );
  });  
});
router.get('/dibiyapur@1299', (req, res) => {
  readdata.read_Dibiyapur(function(datas) {
   res.render('uttarpradesh/Auraiya/Dibiyapur_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
