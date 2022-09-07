const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Kanpur_read');

const {add_Kanpur,add_Baripal,add_Chaubepur,add_Uttaripura,
 } = require('../src/controller/Kanpur_Update');
router.post('/Kanpur', add_Kanpur);
router.post('/Baripal', add_Baripal);
router.post('/Chaubepur', add_Chaubepur);
router.post('/Uttaripura',add_Uttaripura);



router.get('/Kanpur', (req, res) => {
  readdata.read_Kanpur(function(datas) {
    res.render('uttarpradesh/Kanpur/Kanpur.hbs', {data: datas});
  });
});
router.get('/Kanpur_all', (req, res) => {
  
    res.render('uttarpradesh/Kanpur/Kanpur_allmandi.hbs');
 
});
router.get('/Baripal', (req, res) => {
  readdata.read_Baripal(function(datas) {
    res.render('uttarpradesh/Kanpur/Baripal.hbs', {data: datas});
  });
});

router.get('/Chaubepur', (req, res) => {
  readdata.readk_Chaubepur(function(datas) {
   res.render('uttarpradesh/Kanpur/Chaubepur.hbs', {data: datas});
  });
});
router.get('/Uttaripura', (req, res) => {
  readdata.read_Uttaripura(function(datas) {
   res.render('uttarpradesh/Kanpur/Uttaripura.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Kanpur@4056', (req, res) => {
  readdata.read_Kanpur(function(datas) {
    res.render('uttarpradesh/Kanpur/Kanpur_Update.hbs',{data: datas});
  });
});
router.get('/Baripal@7698', (req, res) => {
  readdata.read_Baripal(function(datas) {
    res.render('uttarpradesh/Kanpur/Baripal_Update.hbs',{data: datas} );
  });  
});
router.get('/Chaubepur@129', (req, res) => {
  readdata.readk_Chaubepur(function(datas) {
   res.render('uttarpradesh/Kanpur/Chaubepur_Update.hbs',{data: datas} );
  }); 
});
router.get('/Uttaripura@246', (req, res) => {
  readdata.read_Uttaripura(function(datas) {
   res.render('uttarpradesh/Kanpur/Uttaripura_Update.hbs',{data: datas});
  });
});

module.exports = router;
