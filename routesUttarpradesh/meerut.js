const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Meerut_read');

const {add_Meerut,add_Mawana,add_Parikshitgarh,add_Sardhana,
 } = require('../src/controller/Meerut_Update');
router.post('/Meerut', add_Meerut);
router.post('/Mawana', add_Mawana);
router.post('/Parikshitgarh', add_Parikshitgarh);
router.post('/Sardhana',add_Sardhana);



router.get('/Meerut', (req, res) => {
  readdata.read_Meerut(function(datas) {
    res.render('uttarpradesh/Meerut/Meerut.hbs', {data: datas});
  });
});
router.get('/Meerut_all', (req, res) => {
  
    res.render('uttarpradesh/Meerut/Meerut_allmandi.hbs');
 
});
router.get('/Sardhana', (req, res) => {
  readdata.read_Sardhana(function(datas) {
    res.render('uttarpradesh/Meerut/Sardhana.hbs', {data: datas});
  });
});

router.get('/Mawana', (req, res) => {
  readdata.read_Mawana(function(datas) {
   res.render('uttarpradesh/Meerut/Mawana.hbs', {data: datas});
  });
});
router.get('/Parikshitgarh', (req, res) => {
  readdata.read_Parikshitgarh(function(datas) {
   res.render('uttarpradesh/Meerut/Parikshitgarh.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Meerut@4056', (req, res) => {
  readdata.read_Meerut(function(datas) {
    res.render('uttarpradesh/Meerut/Meerut_Update.hbs',{data: datas});
  });
});
router.get('/Sardhana@7698', (req, res) => {
  readdata.read_Sardhana(function(datas) {
    res.render('uttarpradesh/Meerut/Sardhana_Update.hbs',{data: datas} );
  });  
});
router.get('/Mawana@129', (req, res) => {
  readdata.read_Mawana(function(datas) {
   res.render('uttarpradesh/Meerut/Mawana_Update.hbs',{data: datas} );
  }); 
});
router.get('/Parikshitgarh@246', (req, res) => {
  readdata.read_Parikshitgarh(function(datas) {
   res.render('uttarpradesh/Meerut/Parikshitgarh_Update.hbs',{data: datas});
  });
});

module.exports = router;
