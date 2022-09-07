const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Firozabad_read');

const {add_Firozabad,add_Shikohabad,add_Sirsaganj,add_Tundla,
 } = require('../src/controller/Firozabad_Update');
router.post('/Firozabad', add_Firozabad);
router.post('/Shikohabad', add_Shikohabad);
router.post('/Sirsaganj', add_Sirsaganj);
router.post('/Tundla',add_Tundla);



router.get('/Firozabad', (req, res) => {
  readdata.read_Firozabad(function(datas) {
    res.render('uttarpradesh/Firozabad/Firozabad.hbs', {data: datas});
  });
});
router.get('/Firozabad_all', (req, res) => {
  
    res.render('uttarpradesh/Firozabad/Firozabad_allmandi.hbs');
 
});
router.get('/Tundla', (req, res) => {
  readdata.read_Tundla(function(datas) {
    res.render('uttarpradesh/Firozabad/Tundla.hbs', {data: datas});
  });
});

router.get('/Shikohabad', (req, res) => {
  readdata.read_Shikohabad(function(datas) {
   res.render('uttarpradesh/Firozabad/Shikohabad.hbs', {data: datas});
  });
});
router.get('/Sirsaganj', (req, res) => {
  readdata.read_Sirsaganj(function(datas) {
   res.render('uttarpradesh/Firozabad/Sirsaganj.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Firozabad@4056', (req, res) => {
  readdata.read_Firozabad(function(datas) {
    res.render('uttarpradesh/Firozabad/Firozabad_Update.hbs',{data: datas});
  });
});
router.get('/Tundla@7698', (req, res) => {
  readdata.read_Tundla(function(datas) {
    res.render('uttarpradesh/Firozabad/Tundla_Update.hbs',{data: datas} );
  });  
});
router.get('/Shikohabad@129', (req, res) => {
  readdata.read_Shikohabad(function(datas) {
   res.render('uttarpradesh/Firozabad/Shikohabad_Update.hbs',{data: datas} );
  }); 
});
router.get('/Sirsaganj@246', (req, res) => {
  readdata.read_Sirsaganj(function(datas) {
   res.render('uttarpradesh/Firozabad/Sirsaganj_Update.hbs',{data: datas});
  });
});

module.exports = router;
