const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Saharanpur_read');

const {add_Saharanpur, add_Chhutmalpur,
  add_Deoband,
  add_Gangoh,
  add_Nakur,
  add_Nanota,
  add_Sulatanpurchilana,
  add_Rampurmaniharan,
 } = require('../src/controller/Saharanpur_Update');
router.post('/Saharanpur', add_Saharanpur);
router.post('/Chhutmalpur', add_Chhutmalpur);
router.post('/Deoband', add_Deoband);
router.post('/Gangoh', add_Gangoh);
router.post('/Nakur', add_Nakur);
router.post('/Nanota', add_Nanota);
router.post('/Sulatanpurchilana', add_Sulatanpurchilana);
router.post('/Rampurmaniharan', add_Rampurmaniharan);


router.get('/Saharanpur', (req, res) => {
  readdata.read_Saharanpur(function(datas) {
    res.render('uttarpradesh/Saharanpur/Saharanpur.hbs', {data: datas});
  });
});
router.get('/Saharanpur_all', (req, res) => {
  
    res.render('uttarpradesh/Saharanpur/Saharanpur_allmandi.hbs');
 
});
router.get('/Chhutmalpur', (req, res) => {
  readdata.read_Chhutmalpur(function(datas) {
    res.render('uttarpradesh/Saharanpur/Chhutmalpur.hbs', {data: datas});
  });
});

router.get('/Deoband', (req, res) => {
  readdata.read_Deoband(function(datas) {
   res.render('uttarpradesh/Saharanpur/Deoband.hbs', {data: datas});
  });
});
router.get('/Gangoh', (req, res) => {
  readdata.read_Gangoh(function(datas) {
   res.render('uttarpradesh/Saharanpur/Gangoh.hbs', {data: datas});
  });
});
router.get('/Nakur', (req, res) => {
 readdata.read_Nakur(function(datas) {
   res.render('uttarpradesh/Saharanpur/Nakur.hbs', {data: datas});
  });
});
router.get('/Nanota', (req, res) => {
  readdata.read_Nanota(function(datas) {
    res.render('uttarpradesh/Saharanpur/Nanota.hbs', {data: datas});
  });
});
router.get('/Sulatanpurchilana', (req, res) => {
  readdata.read_Sulatanpurchilana(function(datas) {
    res.render('uttarpradesh/Saharanpur/Sulatanpurchilana.hbs', {data: datas});
  });
});
router.get('/Rampurmaniharan', (req, res) => {
  readdata.read_Rampurmaniharan(function(datas) {
    res.render('uttarpradesh/Saharanpur/Rampurmaniharan.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Saharanpur@456', (req, res) => {
  readdata.read_Saharanpur(function(datas) {
    res.render('uttarpradesh/Saharanpur/Saharanpur_Update.hbs',{data: datas});
  });
});
router.get('/Chhutmalpur@4541', (req, res) => {
  readdata.read_Chhutmalpur(function(datas) {
    res.render('uttarpradesh/Saharanpur/Chhutmalpur_Update.hbs',{data: datas} );
  });  
});
router.get('/Deoband@4512', (req, res) => {
  readdata.read_Deoband(function(datas) {
   res.render('uttarpradesh/Saharanpur/Deoband_Update.hbs',{data: datas} );
  }); 
});
router.get('/Gangoh@451', (req, res) => {
  readdata.read_Gangoh(function(datas) {
   res.render('uttarpradesh/Saharanpur/Gangoh_Update.hbs',{data: datas});
  });
});
router.get('/Nakur@1282', (req, res) => {
  readdata.read_Nakur(function(datas) {
    res.render('uttarpradesh/Saharanpur/Nakur_Update.hbs',{data: datas});
  });  
 });
router.get('/Nanota@456734', (req, res) => {
  readdata.read_Nanota(function(datas) {
    res.render('uttarpradesh/Saharanpur/Nanota_Update.hbs',{data: datas});
  });
});
router.get('/Sulatanpurchilana9@7865', (req, res) => {
  readdata.read_Sulatanpurchilana(function(datas) {
    res.render('uttarpradesh/Saharanpur/Sulatanpurchilana_Update.hbs',{data: datas});
  });
});
router.get('/Rampurmaniharan@4589', (req, res) => {
  readdata.read_Rampurmaniharan(function(datas) {
    res.render('uttarpradesh/Saharanpur/Rampurmaniharan_Update.hbs',{data: datas});
  }); 
});
module.exports = router;
