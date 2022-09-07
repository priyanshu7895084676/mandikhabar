const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Bareilly_read');

const {add_Anwla,add_Baheri, add_Bareilly
 } = require('../src/controller/Bareilly_Update');
router.post('/Anwla', add_Anwla);
router.post('/Baheri', add_Baheri);
router.post('/Bareilly',add_Bareilly);




router.get('/Bareilly', (req, res) => {
  readdata.read_Bareilly(function(datas) {
    res.render('uttarpradesh/Bareilly/Bareilly.hbs', {data: datas});
  });
});
router.get('/Bareilly_all', (req, res) => {
  
    res.render('uttarpradesh/Bareilly/Bareilly_allmandi.hbs');
 
});
router.get('/Anwla', (req, res) => {
  readdata.read_Anwla(function(datas) {
    res.render('uttarpradesh/Bareilly/Anwla.hbs', {data: datas});
  });
});

router.get('/Baheri', (req, res) => {
  readdata.read_Baheri(function(datas) {
   res.render('uttarpradesh/Bareilly/Baheri.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Bareilly@4056', (req, res) => {
  readdata.read_Bareilly(function(datas) {
    res.render('uttarpradesh/Bareilly/Bareilly_Update.hbs',{data: datas});
  });
});
router.get('/Anwla@7698', (req, res) => {
  readdata.read_Anwla(function(datas) {
    res.render('uttarpradesh/Bareilly/Anwla_Update.hbs',{data: datas} );
  });  
});
router.get('/Baheri@1299', (req, res) => {
  readdata.read_Baheri(function(datas) {
   res.render('uttarpradesh/Bareilly/Baheri_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
