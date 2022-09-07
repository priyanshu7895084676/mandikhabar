const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Ayodhya_read');

const {add_Ayodhya,add_Rudauli
 } = require('../src/controller/Ayodhya_Update');
router.post('/Ayodhya', add_Ayodhya);
router.post('/Rudauli',add_Rudauli);



router.get('/ayodhya', (req, res) => {
  readdata.read_Ayodhya(function(datas) {
    res.render('uttarpradesh/Ayodhya/Ayodhya.hbs', {data: datas});
  });
});
router.get('/ayodhya_all', (req, res) => {
  
    res.render('uttarpradesh/Ayodhya/Ayodhya_allmandi.hbs');
 
});
router.get('/rudauli', (req, res) => {
  readdata.read_Rudauli(function(datas) {
    res.render('uttarpradesh/Ayodhya/Rudauli.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Ayodhya@40533', (req, res) => {
  readdata.read_Ayodhya(function(datas) {
    res.render('uttarpradesh/Ayodhya/Ayodhya_Update.hbs',{data: datas});
  });
});
router.get('/Rudauli@69', (req, res) => {
  readdata.read_Rudauli(function(datas) {
    res.render('uttarpradesh/Ayodhya/Rudauli_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
