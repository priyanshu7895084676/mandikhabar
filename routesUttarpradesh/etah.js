const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Etah_read');

const {add_Aliganj,add_Avagarh, add_Etah
 } = require('../src/controller/Etah_Update');
router.post('/Aliganj', add_Aliganj);
router.post('/Avagarh', add_Avagarh);
router.post('/Etah',add_Etah);




router.get('/Etah', (req, res) => {
  readdata.read_Etah(function(datas) {
    res.render('uttarpradesh/Etah/Etah.hbs', {data: datas});
  });
});
router.get('/Etah_all', (req, res) => {
  
    res.render('uttarpradesh/Etah/Etah_allmandi.hbs');
 
});
router.get('/Aliganj', (req, res) => {
  readdata.read_Aliganj(function(datas) {
    res.render('uttarpradesh/Etah/Aliganj.hbs', {data: datas});
  });
});

router.get('/Avagarh', (req, res) => {
  readdata.read_Avagarh(function(datas) {
   res.render('uttarpradesh/Etah/Avagarh.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Etah@4056', (req, res) => {
  readdata.read_Etah(function(datas) {
    res.render('uttarpradesh/Etah/Etah_Update.hbs',{data: datas});
  });
});
router.get('/Aliganj@7698', (req, res) => {
  readdata.read_Aliganj(function(datas) {
    res.render('uttarpradesh/Etah/Aliganj_Update.hbs',{data: datas} );
  });  
});
router.get('/Avagarh@1299', (req, res) => {
  readdata.read_Avagarh(function(datas) {
   res.render('uttarpradesh/Etah/Avagarh_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
