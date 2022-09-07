const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Jaunpur_read');

const {add_Shahganj,add_Mungrabadshahpur, add_Jaunpur
 } = require('../src/controller/Jaunpur_Update');
router.post('/Shahganj', add_Shahganj);
router.post('/Mungrabadshahpur', add_Mungrabadshahpur);
router.post('/Jaunpur',add_Jaunpur);




router.get('/Jaunpur', (req, res) => {
  readdata.read_Jaunpur(function(datas) {
    res.render('uttarpradesh/Jaunpur/Jaunpur.hbs', {data: datas});
  });
});
router.get('/Jaunpur_all', (req, res) => {
  
    res.render('uttarpradesh/Jaunpur/Jaunpur_allmandi.hbs');
 
});
router.get('/Shahganj', (req, res) => {
  readdata.read_Shahganj(function(datas) {
    res.render('uttarpradesh/Jaunpur/Shahganj.hbs', {data: datas});
  });
});

router.get('/Mungrabadshahpur', (req, res) => {
  readdata.read_Mungrabadshahpur(function(datas) {
   res.render('uttarpradesh/Jaunpur/Mungrabadshahpur.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Jaunpur@4056', (req, res) => {
  readdata.read_Jaunpur(function(datas) {
    res.render('uttarpradesh/Jaunpur/Jaunpur_Update.hbs',{data: datas});
  });
});
router.get('/Shahganj@7698', (req, res) => {
  readdata.read_Shahganj(function(datas) {
    res.render('uttarpradesh/Jaunpur/Shahganj_Update.hbs',{data: datas} );
  });  
});
router.get('/Mungrabadshahpur@1299', (req, res) => {
  readdata.read_Mungrabadshahpur(function(datas) {
   res.render('uttarpradesh/Jaunpur/Mungrabadshahpur_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
