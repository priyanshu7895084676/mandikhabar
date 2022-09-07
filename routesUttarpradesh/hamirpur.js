const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Hamirpur_read');

const {add_Bharuasumerpur,add_Kurara,add_Maudaha,add_Muskura,add_Rath
 } = require('../src/controller/Hamirpur_Update');
router.post('/Bharuasumerpur', add_Bharuasumerpur);
router.post('/Kurara', add_Kurara);
router.post('/Maudaha', add_Maudaha);
router.post('/Muskura',add_Muskura);

router.post('/Rath',add_Rath);

router.get('/Bharuasumerpur', (req, res) => {
  readdata.read_Bharauasumerpur(function(datas) {
    res.render('uttarpradesh/Hamirpur/Bharuasumerpur.hbs', {data: datas});
  });
});
router.get('/Hamirpur_all', (req, res) => {
  
    res.render('uttarpradesh/Hamirpur/Hamirpur_allmandi.hbs');
 
});
router.get('/Kurara', (req, res) => {
  readdata.read_Kurara(function(datas) {
    res.render('uttarpradesh/Hamirpur/Kurara.hbs', {data: datas});
  });
});

router.get('/Maudaha', (req, res) => {
  readdata.readk_Maudaha(function(datas) {
   res.render('uttarpradesh/Hamirpur/Maudaha.hbs', {data: datas});
  });
});
router.get('/Muskura', (req, res) => {
  readdata.read_Muskura(function(datas) {
   res.render('uttarpradesh/Hamirpur/Muskura.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Bharuasumerpur@4056', (req, res) => {
  readdata.read_Bharauasumerpur(function(datas) {
    res.render('uttarpradesh/Hamirpur/Bharuasumerpur_Update.hbs',{data: datas});
  });
});
router.get('/Kurara@768', (req, res) => {
  readdata.read_Kurara(function(datas) {
    res.render('uttarpradesh/Hamirpur/Kurara_Update.hbs',{data: datas} );
  });  
});
router.get('/Maudaha@129', (req, res) => {
  readdata.readk_Maudaha(function(datas) {
   res.render('uttarpradesh/Hamirpur/Maudaha_Update.hbs',{data: datas} );
  }); 
});
router.get('/Muskura@246', (req, res) => {
  readdata.read_Muskura(function(datas) {
   res.render('uttarpradesh/Hamirpur/Muskura_Update.hbs',{data: datas});
  });
});
router.get('/Rath@246', (req, res) => {
    readdata.read_Rath(function(datas) {
     res.render('uttarpradesh/Hamirpur/Rath_Update.hbs',{data: datas});
    });
  });
module.exports = router;
