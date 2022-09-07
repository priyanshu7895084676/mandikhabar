const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Baliya_read');

const {add_Baliya,add_BilthraRoad,add_Chitbaragaon,add_Rasra,
 } = require('../src/controller/Baliya_Update');
router.post('/Baliya', add_Baliya);
router.post('/Bilthararoad', add_BilthraRoad);
router.post('/Chitbragaon', add_Chitbaragaon);
router.post('/Rasra',add_Rasra);



router.get('/baliya', (req, res) => {
  readdata.read_Baliya(function(datas) {
    res.render('uttarpradesh/Baliya/Ballia.hbs', {data: datas});
  });
});
router.get('/baliya_all', (req, res) => {
  
    res.render('uttarpradesh/Baliya/Baliya_allmandi.hbs');
 
});
router.get('/Rasra', (req, res) => {
  readdata.read_Rasra(function(datas) {
    res.render('uttarpradesh/Baliya/Rasra.hbs', {data: datas});
  });
});

router.get('/BiltharaRoad', (req, res) => {
  readdata.read_BiltharaRoad(function(datas) {
   res.render('uttarpradesh/Baliya/BiltharaRoad.hbs', {data: datas});
  });
});
router.get('/Chitbaragaon', (req, res) => {
  readdata.read_Chitbaragaon(function(datas) {
   res.render('uttarpradesh/Baliya/Chitbaragaon.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Baliya@4056', (req, res) => {
  readdata.read_Baliya(function(datas) {
    res.render('uttarpradesh/Baliya/Ballia_Update.hbs',{data: datas});
  });
});
router.get('/Rasra@7698', (req, res) => {
  readdata.read_Rasra(function(datas) {
    res.render('uttarpradesh/Baliya/Rasra_Update.hbs',{data: datas} );
  });  
});
router.get('/BiltharaRoad@129', (req, res) => {
  readdata.read_BiltharaRoad(function(datas) {
   res.render('uttarpradesh/Baliya/BiltharaRoad_Update.hbs',{data: datas} );
  }); 
});
router.get('/Chitbaragaon@246', (req, res) => {
  readdata.read_Chitbaragaon(function(datas) {
   res.render('uttarpradesh/Baliya/Chitbaragaon_Update.hbs',{data: datas});
  });
});

module.exports = router;
