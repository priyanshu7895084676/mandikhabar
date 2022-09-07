const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Balrampur_read');

const {add_Balrampur,add_Pachperwa,add_Tulsipur,add_Utraula,
 } = require('../src/controller/Balrampur_Update');
router.post('/Balrampur', add_Balrampur);
router.post('/Pachperwa', add_Pachperwa);
router.post('/Chitbragaon', add_Tulsipur);
router.post('/Utraula',add_Utraula);
router.post('/Tulsipur',add_Tulsipur);


router.get('/Balrampur', (req, res) => {
  readdata.read_Balrampur(function(datas) {
    res.render('uttarpradesh/Balrampur/Balrampur.hbs', {data: datas});
  });
});
router.get('/Balrampur_all', (req, res) => {
  
    res.render('uttarpradesh/Balrampur/Balrampur_allmandi.hbs');
 
});
router.get('/Utraula', (req, res) => {
  readdata.read_Utraula(function(datas) {
    res.render('uttarpradesh/Balrampur/Utraula.hbs', {data: datas});
  });
});

router.get('/Pachperwa', (req, res) => {
  readdata.read_Pachperwa(function(datas) {
   res.render('uttarpradesh/Balrampur/Pachperwa.hbs', {data: datas});
  });
});
router.get('/Tulsipur', (req, res) => {
  readdata.read_Tulsipur(function(datas) {
   res.render('uttarpradesh/Balrampur/Tulsipur.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Balrampur@4056', (req, res) => {
  readdata.read_Balrampur(function(datas) {
    res.render('uttarpradesh/Balrampur/Balrampur_Update.hbs',{data: datas});
  });
});
router.get('/Utraula@7698', (req, res) => {
  readdata.read_Utraula(function(datas) {
    res.render('uttarpradesh/Balrampur/Utraula_Update.hbs',{data: datas} );
  });  
});
router.get('/Pachperwa@129', (req, res) => {
  readdata.read_Pachperwa(function(datas) {
   res.render('uttarpradesh/Balrampur/Pachperwa_Update.hbs',{data: datas} );
  }); 
});
router.get('/Tulsipur@246', (req, res) => {
  readdata.read_Tulsipur(function(datas) {
   res.render('uttarpradesh/Balrampur/Tulsipur_Update.hbs',{data: datas});
  });
});

module.exports = router;
