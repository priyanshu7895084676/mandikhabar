const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Pratapgarh_read');

const {add_Pratapgarh,add_Rudauli
 } = require('../src/controller/Pratapgarh_Update');
router.post('/Pratapgarh', add_Pratapgarh);




router.get('/Pratapgarh', (req, res) => {
  readdata.read_Pratapgarh(function(datas) {
    res.render('uttarpradesh/Pratapgarh/Pratapgarh.hbs', {data: datas});
  });
});
router.get('/Pratapgarh_all', (req, res) => {
  
    res.render('uttarpradesh/Pratapgarh/Pratapgarh_allmandi.hbs');
 
});

// UPDATES
router.get('/Pratapgarh@40533', (req, res) => {
  readdata.read_Pratapgarh(function(datas) {
    res.render('uttarpradesh/Pratapgarh/Pratapgarh_Update.hbs',{data: datas});
  });
});



module.exports = router;
