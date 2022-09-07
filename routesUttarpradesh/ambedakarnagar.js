const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Ambedkarnagar_read');

const {add_Ambedkarnagar,add_TandaAkharpur
 } = require('../src/controller/Ambedkarnagar_Update');
router.post('/Akbarpur', add_Ambedkarnagar);
router.post('/TandaAkharpur',add_TandaAkharpur);



router.get('/akbarpur', (req, res) => {
  readdata.read_AmbedkarNagar(function(datas) {
    res.render('uttarpradesh/AmbedkarNagar/Akbarpur.hbs', {data: datas});
  });
});
router.get('/ambedkarNagar_all', (req, res) => {
  
    res.render('uttarpradesh/AmbedkarNagar/AmbedkarNagar_allmandi.hbs');
 
});
router.get('/tandaAkbarpur', (req, res) => {
  readdata.read_TandaAkharpur(function(datas) {
    res.render('uttarpradesh/AmbedkarNagar/TandaAkbarpur.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Akbarpur@405', (req, res) => {
  readdata.read_AmbedkarNagar(function(datas) {
    res.render('uttarpradesh/AmbedkarNagar/Akbarpur_Update.hbs',{data: datas});
  });
});
router.get('/tandaAkhar@769', (req, res) => {
  readdata.read_TandaAkharpur(function(datas) {
    res.render('uttarpradesh/AmbedkarNagar/TandaAkharpur_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
