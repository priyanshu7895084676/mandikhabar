const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Maharajganj_read');

const {add_Anandnagar,add_Garaura,add_Nautanwa,add_Partawal, add_Nautanawa,
 } = require('../src/controller/Maharajganj_Update');
router.post('/Anandnagar', add_Anandnagar);
router.post('/Garaura', add_Garaura);
router.post('/Nautanwa', add_Nautanawa);
router.post('/Partawal',add_Partawal);



router.get('/Anandnagar', (req, res) => {
  readdata.read_Anandnagar(function(datas) {
    res.render('uttarpradesh/Maharajganj/Anandnagar.hbs', {data: datas});
  });
});
router.get('/Maharajganj_all', (req, res) => {
  
    res.render('uttarpradesh/Maharajganj/Maharajganj_allmandi.hbs');
 
});
router.get('/Partawal', (req, res) => {
  readdata.read_Partawal(function(datas) {
    res.render('uttarpradesh/Maharajganj/Partawal.hbs', {data: datas});
  });
});

router.get('/Garaura', (req, res) => {
  readdata.readk_Garaura(function(datas) {
   res.render('uttarpradesh/Maharajganj/Garaura.hbs', {data: datas});
  });
});
router.get('/Nautanawa', (req, res) => {
  readdata.read_Nautanawa(function(datas) {
   res.render('uttarpradesh/Maharajganj/Nautanwa.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Anandnagar@4056', (req, res) => {
  readdata.read_Anandnagar(function(datas) {
    res.render('uttarpradesh/Maharajganj/Anandnagar_Update.hbs',{data: datas});
  });
});
router.get('/Partawal@7698', (req, res) => {
  readdata.read_Partawal(function(datas) {
    res.render('uttarpradesh/Maharajganj/Partawal_Update.hbs',{data: datas} );
  });  
});
router.get('/Garaura@129', (req, res) => {
  readdata.readk_Garaura(function(datas) {
   res.render('uttarpradesh/Maharajganj/Garaura_Update.hbs',{data: datas} );
  }); 
});
router.get('/Nautanwa@246', (req, res) => {
  readdata.read_Nautanawa(function(datas) {
   res.render('uttarpradesh/Maharajganj/Nautanwa_Update.hbs',{data: datas});
  });
});

module.exports = router;
