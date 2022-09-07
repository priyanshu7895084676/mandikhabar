const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Jalaun_read');

const {add_Jalaun, add_Ait,
  add_Kadaura,
  add_Kalpi,
  add_Konch,
  add_Madhogarh,
  add_Urai,
  add_Wazirganj,
 } = require('../src/controller/Jalaun_Update');
router.post('/Jalaun', add_Jalaun);
router.post('/Ait', add_Ait);
router.post('/Kadaura', add_Kadaura);
router.post('/Kalpi', add_Kalpi);
router.post('/Konch', add_Konch);
router.post('/Madhogarh', add_Madhogarh);
router.post('/Urai', add_Urai);
router.post('/Wazirganj', add_Wazirganj);


router.get('/Jalaun', (req, res) => {
  readdata.read_Jalaun(function(datas) {
    res.render('uttarpradesh/Jalaun/Jalaun.hbs', {data: datas});
  });
});
router.get('/Jalaun_all', (req, res) => {
  
    res.render('uttarpradesh/Jalaun/Jalaun_allmandi.hbs');
 
});
router.get('/Ait', (req, res) => {
  readdata.read_Ait(function(datas) {
    res.render('uttarpradesh/Jalaun/Ait.hbs', {data: datas});
  });
});

router.get('/Kadaura', (req, res) => {
  readdata.read_Kadaura(function(datas) {
   res.render('uttarpradesh/Jalaun/Kadaura.hbs', {data: datas});
  });
});
router.get('/Kalpi', (req, res) => {
  readdata.read_Kalpi(function(datas) {
   res.render('uttarpradesh/Jalaun/Kalpi.hbs', {data: datas});
  });
});
router.get('/Konch', (req, res) => {
 readdata.read_Konch(function(datas) {
   res.render('uttarpradesh/Jalaun/Konch.hbs', {data: datas});
  });
});
router.get('/Madhogarh', (req, res) => {
  readdata.read_Madhogarh(function(datas) {
    res.render('uttarpradesh/Jalaun/Madhogarh.hbs', {data: datas});
  });
});
router.get('/Urai', (req, res) => {
  readdata.read_Urai(function(datas) {
    res.render('uttarpradesh/Jalaun/Urai.hbs', {data: datas});
  });
});
router.get('/wazirganj', (req, res) => {
  readdata.readShamshabad(function(datas) {
    res.render('uttarpradesh/Jalaun/Wazirganj.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Jalaun@456', (req, res) => {
  readdata.read_Jalaun(function(datas) {
    res.render('uttarpradesh/Jalaun/Jalaun_Update.hbs',{data: datas});
  });
});
router.get('/Ait@4541', (req, res) => {
  readdata.read_Ait(function(datas) {
    res.render('uttarpradesh/Jalaun/Ait_Update.hbs',{data: datas} );
  });  
});
router.get('/Kadaura@4512', (req, res) => {
  readdata.read_Kadaura(function(datas) {
   res.render('uttarpradesh/Jalaun/Kadaura_Update.hbs',{data: datas} );
  }); 
});
router.get('/Kalpi@451', (req, res) => {
  readdata.read_Kalpi(function(datas) {
   res.render('uttarpradesh/Jalaun/Kalpi_Update.hbs',{data: datas});
  });
});
router.get('/Konch@1282', (req, res) => {
  readdata.read_Konch(function(datas) {
    res.render('uttarpradesh/Jalaun/Konch_Update.hbs',{data: datas});
  });  
 });
router.get('/Madhogarh@456734', (req, res) => {
  readdata.read_Madhogarh(function(datas) {
    res.render('uttarpradesh/Jalaun/Madhogarh_Update.hbs',{data: datas});
  });
});
router.get('/Urai9@7865', (req, res) => {
  readdata.read_Urai(function(datas) {
    res.render('uttarpradesh/Jalaun/Urai_Update.hbs',{data: datas});
  });
});
router.get('/Wazirganj@4589', (req, res) => {
  readdata.read_Wazirganj(function(datas) {
    res.render('uttarpradesh/Jalaun/Wazirganj_Update.hbs',{data: datas});
  }); 
});
module.exports = router;
