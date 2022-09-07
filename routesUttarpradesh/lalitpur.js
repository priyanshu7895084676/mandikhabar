const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Lalitpur_read');

const {add_Lalitpur,add_Mahroni
 } = require('../src/controller/Lalitpur_Update');
router.post('/Lalitpur', add_Lalitpur);
router.post('/Mahroni',add_Mahroni);



router.get('/Lalitpur', (req, res) => {
  readdata.read_Lalitpur(function(datas) {
    res.render('uttarpradesh/Lalitpur/Lalitpur.hbs', {data: datas});
  });
});
router.get('/Lalitpur_all', (req, res) => {
  
    res.render('uttarpradesh/Lalitpur/Lalitpur_allmandi.hbs');
 
});
router.get('/Mahroni', (req, res) => {
  readdata.read_Mahroni(function(datas) {
    res.render('uttarpradesh/Lalitpur/Mahroni.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Lalitpur@40533', (req, res) => {
  readdata.read_Lalitpur(function(datas) {
    res.render('uttarpradesh/Lalitpur/Lalitpur_Update.hbs',{data: datas});
  });
});
router.get('/Mahroni@69', (req, res) => {
  readdata.read_Mahroni(function(datas) {
    res.render('uttarpradesh/Lalitpur/Mahroni_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
