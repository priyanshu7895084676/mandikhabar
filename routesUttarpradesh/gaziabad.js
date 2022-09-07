const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Gaziabad_read');

const {add_Hapur,add_Muradnagar, add_Gaziabad
 } = require('../src/controller/Gaziabad_Update');
router.post('/Hapur', add_Hapur);
router.post('/Muradnagar', add_Muradnagar);
router.post('/Gaziabad',add_Gaziabad);




router.get('/Gaziabad', (req, res) => {
  readdata.read_Gaziabad(function(datas) {
    res.render('uttarpradesh/Gaziabad/Gaziabad.hbs', {data: datas});
  });
});
router.get('/Gaziabad_all', (req, res) => {
  
    res.render('uttarpradesh/Gaziabad/Gaziabad_allmandi.hbs');
 
});
router.get('/Hapur', (req, res) => {
  readdata.read_Hapur(function(datas) {
    res.render('uttarpradesh/Gaziabad/Hapur.hbs', {data: datas});
  });
});

router.get('/Muradnagar', (req, res) => {
  readdata.read_Muradnagar(function(datas) {
   res.render('uttarpradesh/Gaziabad/Muradnagar.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Gaziabad@4056', (req, res) => {
  readdata.read_Gaziabad(function(datas) {
    res.render('uttarpradesh/Gaziabad/Gaziabad_Update.hbs',{data: datas});
  });
});
router.get('/Hapur@7698', (req, res) => {
  readdata.read_Hapur(function(datas) {
    res.render('uttarpradesh/Gaziabad/Hapur_Update.hbs',{data: datas} );
  });  
});
router.get('/Muradnagar@1299', (req, res) => {
  readdata.read_Muradnagar(function(datas) {
   res.render('uttarpradesh/Gaziabad/Muradnagar_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
