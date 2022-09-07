const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Gorakhpur_read');

const {add_Chaurichaura,add_Sahjanwa, add_Gorakhpur
 } = require('../src/controller/Gorakhpur_Update');
router.post('/Chaurichaura', add_Chaurichaura);
router.post('/Sahjanwa', add_Sahjanwa);
router.post('/Gorakhpur',add_Gorakhpur);




router.get('/Gorakhpur', (req, res) => {
  readdata.read_Gorakhpur(function(datas) {
    res.render('uttarpradesh/Gorakhpur/Gorakhpur.hbs', {data: datas});
  });
});
router.get('/Gorakhpur_all', (req, res) => {
  
    res.render('uttarpradesh/Gorakhpur/Gorakhpur_allmandi.hbs');
 
});
router.get('/Chaurichaura', (req, res) => {
  readdata.read_Chaurichaura(function(datas) {
    res.render('uttarpradesh/Gorakhpur/Chaurichaura.hbs', {data: datas});
  });
});

router.get('/Sahjanwa', (req, res) => {
  readdata.read_Sahjanwa(function(datas) {
   res.render('uttarpradesh/Gorakhpur/Sahjanwa.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Gorakhpur@4056', (req, res) => {
  readdata.read_Gorakhpur(function(datas) {
    res.render('uttarpradesh/Gorakhpur/Gorakhpur_Update.hbs',{data: datas});
  });
});
router.get('/Chaurichaura@7698', (req, res) => {
  readdata.read_Chaurichaura(function(datas) {
    res.render('uttarpradesh/Gorakhpur/Chaurichaura_Update.hbs',{data: datas} );
  });  
});
router.get('/Sahjanwa@1299', (req, res) => {
  readdata.read_Sahjanwa(function(datas) {
   res.render('uttarpradesh/Gorakhpur/Sahjanwa_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
