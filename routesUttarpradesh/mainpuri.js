const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Mainpuri_read');

const {add_Ghiror,add_Bewar, add_Mainpuri
 } = require('../src/controller/Mainpuri_Update');
router.post('/Ghiror', add_Ghiror);
router.post('/Bewar', add_Bewar);
router.post('/Mainpuri',add_Mainpuri);




router.get('/Mainpuri', (req, res) => {
  readdata.read_Mainpuri(function(datas) {
    res.render('uttarpradesh/Mainpuri/Mainpuri.hbs', {data: datas});
  });
});
router.get('/Mainpuri_all', (req, res) => {
  
    res.render('uttarpradesh/Mainpuri/Mainpuri_allmandi.hbs');
 
});
router.get('/Ghiror', (req, res) => {
  readdata.read_Ghiror(function(datas) {
    res.render('uttarpradesh/Mainpuri/Ghiror.hbs', {data: datas});
  });
});

router.get('/Bewar', (req, res) => {
  readdata.read_Bewar(function(datas) {
   res.render('uttarpradesh/Mainpuri/Bewar.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Mainpuri@4056', (req, res) => {
  readdata.read_Mainpuri(function(datas) {
    res.render('uttarpradesh/Mainpuri/Mainpuri_Update.hbs',{data: datas});
  });
});
router.get('/Ghiror@7698', (req, res) => {
  readdata.read_Ghiror(function(datas) {
    res.render('uttarpradesh/Mainpuri/Ghiror_Update.hbs',{data: datas} );
  });  
});
router.get('/Bewar@1299', (req, res) => {
  readdata.read_Bewar(function(datas) {
   res.render('uttarpradesh/Mainpuri/Bewar_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
