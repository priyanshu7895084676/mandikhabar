const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Gautambuddhnagar_read');

const {add_Dadri,add_Dankaur,add_Jewar,add_Noida,
 } = require('../src/controller/GautambuddhNagar_Update');
router.post('/Dadri', add_Dadri);
router.post('/Dankaur', add_Dankaur);
router.post('/Jewar', add_Jewar);
router.post('/Noida',add_Noida);



router.get('/Dadri', (req, res) => {
  readdata.read_Dadri(function(datas) {
    res.render('uttarpradesh/GautambuddhNagar/Dadri.hbs', {data: datas});
  });
});
router.get('/GautambuddhNagar_all', (req, res) => {
  
    res.render('uttarpradesh/GautambuddhNagar/GautambuddhNagar_allmandi.hbs');
 
});
router.get('/Noida', (req, res) => {
  readdata.read_Noida(function(datas) {
    res.render('uttarpradesh/GautambuddhNagar/Noida.hbs', {data: datas});
  });
});

router.get('/Dankaur', (req, res) => {
  readdata.readk_Dankaur(function(datas) {
   res.render('uttarpradesh/GautambuddhNagar/Dankaur.hbs', {data: datas});
  });
});
router.get('/Jewar', (req, res) => {
  readdata.read_Jewar(function(datas) {
   res.render('uttarpradesh/GautambuddhNagar/Jewar.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Dadri@4056', (req, res) => {
  readdata.read_Dadri(function(datas) {
    res.render('uttarpradesh/GautambuddhNagar/Dadri_Update.hbs',{data: datas});
  });
});
router.get('/Noida@7698', (req, res) => {
  readdata.read_Noida(function(datas) {
    res.render('uttarpradesh/GautambuddhNagar/Noida_Update.hbs',{data: datas} );
  });  
});
router.get('/Dankaur@129', (req, res) => {
  readdata.readk_Dankaur(function(datas) {
   res.render('uttarpradesh/GautambuddhNagar/Dankaur_Update.hbs',{data: datas} );
  }); 
});
router.get('/Jewar@246', (req, res) => {
  readdata.read_Jewar(function(datas) {
   res.render('uttarpradesh/GautambuddhNagar/Jewar_Update.hbs',{data: datas});
  });
});

module.exports = router;
