const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Prayagraj_raed');

const {add_Prayagraj,add_Jasra,add_Leriyari,add_Sirsa,
 } = require('../src/controller/Prayagraj_Update');
router.post('/Prayagraj', add_Prayagraj);
router.post('/Jasra', add_Jasra);
router.post('/Leriyari', add_Leriyari);
router.post('/Sirsa',add_Sirsa);



router.get('/Prayagraj', (req, res) => {
  readdata.read_Prayagraj(function(datas) {
    res.render('uttarpradesh/Prayagraj/Prayagraj.hbs', {data: datas});
  });
});
router.get('/Prayagraj_all', (req, res) => {
  
    res.render('uttarpradesh/Prayagraj/Prayagraj_allmandi.hbs');
 
});
router.get('/Sirsa', (req, res) => {
  readdata.read_Sirsa(function(datas) {
    res.render('uttarpradesh/Prayagraj/Sirsa.hbs', {data: datas});
  });
});

router.get('/Jasra', (req, res) => {
  readdata.read_Jasra(function(datas) {
   res.render('uttarpradesh/Prayagraj/Jasra.hbs', {data: datas});
  });
});
router.get('/Leriyari', (req, res) => {
  readdata.read_Leriyari(function(datas) {
   res.render('uttarpradesh/Prayagraj/Leriyari.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Prayagraj@4056', (req, res) => {
  readdata.read_Prayagraj(function(datas) {
    res.render('uttarpradesh/Prayagraj/Prayagraj_Update.hbs',{data: datas});
  });
});
router.get('/Sirsa@7698', (req, res) => {
  readdata.read_Sirsa(function(datas) {
    res.render('uttarpradesh/Prayagraj/Sirsa_Update.hbs',{data: datas} );
  });  
});
router.get('/Jasra@129', (req, res) => {
  readdata.read_Jasra(function(datas) {
   res.render('uttarpradesh/Prayagraj/Jasra_Update.hbs',{data: datas} );
  }); 
});
router.get('/Leriyari@246', (req, res) => {
  readdata.read_Leriyari(function(datas) {
   res.render('uttarpradesh/Prayagraj/Leriyari_Update.hbs',{data: datas});
  });
});

module.exports = router;
