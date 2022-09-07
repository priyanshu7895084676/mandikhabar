const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Banda_read');

const {add_Atarra,add_Baberu, add_Banda
 } = require('../src/controller/Banda_Update');
router.post('/Atarra', add_Atarra);
router.post('/Baberu', add_Baberu);
router.post('/Banda',add_Banda);




router.get('/Banda', (req, res) => {
  readdata.read_Banda(function(datas) {
    res.render('uttarpradesh/Banda/Banda.hbs', {data: datas});
  });
});
router.get('/Banda_all', (req, res) => {
  
    res.render('uttarpradesh/Banda/Banda_allmandi.hbs');
 
});
router.get('/Atarra', (req, res) => {
  readdata.read_Atarra(function(datas) {
    res.render('uttarpradesh/Banda/Atarra.hbs', {data: datas});
  });
});

router.get('/Baberu', (req, res) => {
  readdata.read_Baberu(function(datas) {
   res.render('uttarpradesh/Banda/Baberu.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Banda@4056', (req, res) => {
  readdata.read_Banda(function(datas) {
    res.render('uttarpradesh/Banda/Banda_Update.hbs',{data: datas});
  });
});
router.get('/Atarra@7698', (req, res) => {
  readdata.read_Atarra(function(datas) {
    res.render('uttarpradesh/Banda/Atarra_Update.hbs',{data: datas} );
  });  
});
router.get('/Baberu@1299', (req, res) => {
  readdata.read_Baberu(function(datas) {
   res.render('uttarpradesh/Banda/Baberu_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
