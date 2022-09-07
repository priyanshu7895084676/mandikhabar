const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Mathura_read');

const {add_Mathura,add_Kosikalan
 } = require('../src/controller/Mathura_Update');
router.post('/Mathura', add_Mathura);
router.post('/Kosikalan',add_Kosikalan);



router.get('/Mathura', (req, res) => {
  readdata.read_Mathura(function(datas) {
    res.render('uttarpradesh/Mathura/Mathura.hbs', {data: datas});
  });
});
router.get('/Mathura_all', (req, res) => {
  
    res.render('uttarpradesh/Mathura/Mathura_allmandi.hbs');
 
});
router.get('/Kosikalan', (req, res) => {
  readdata.read_Kosikalan(function(datas) {
    res.render('uttarpradesh/Mathura/Kosikalan.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Mathura@40533', (req, res) => {
  readdata.read_Mathura(function(datas) {
    res.render('uttarpradesh/Mathura/Mathura_Update.hbs',{data: datas});
  });
});
router.get('/Kosikalan@69', (req, res) => {
  readdata.read_Kosikalan(function(datas) {
    res.render('uttarpradesh/Mathura/Kosikalan_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
