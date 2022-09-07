const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Pilibhit_read');

const {add_Puranpur,add_Bisalpur, add_Pilibhit
 } = require('../src/controller/Pilibhit_Update');
router.post('/Puranpur', add_Puranpur);
router.post('/Bisalpur', add_Bisalpur);
router.post('/Pilibhit',add_Pilibhit);




router.get('/Pilibhit', (req, res) => {
  readdata.read_Pilibhit(function(datas) {
    res.render('uttarpradesh/Pilibhit/Pilibhit.hbs', {data: datas});
  });
});
router.get('/Pilibhit_all', (req, res) => {
  
    res.render('uttarpradesh/Pilibhit/Pilibhit_allmandi.hbs');
 
});
router.get('/Puranpur', (req, res) => {
  readdata.read_Puranpur(function(datas) {
    res.render('uttarpradesh/Pilibhit/Puranpur.hbs', {data: datas});
  });
});

router.get('/Bisalpur', (req, res) => {
  readdata.read_Bisalpur(function(datas) {
   res.render('uttarpradesh/Pilibhit/Bisalpur.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Pilibhit@4056', (req, res) => {
  readdata.read_Pilibhit(function(datas) {
    res.render('uttarpradesh/Pilibhit/Pilibhit_Update.hbs',{data: datas});
  });
});
router.get('/Puranpur@7698', (req, res) => {
  readdata.read_Puranpur(function(datas) {
    res.render('uttarpradesh/Pilibhit/Puranpur_Update.hbs',{data: datas} );
  });  
});
router.get('/Bisalpur@1299', (req, res) => {
  readdata.read_Bisalpur(function(datas) {
   res.render('uttarpradesh/Pilibhit/Bisalpur_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
