const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Chandauli_read');

const {add_Chandauli,add_Rudauli
 } = require('../src/controller/Chandauli_Update');
router.post('/Chandauli', add_Chandauli);




router.get('/Chandauli', (req, res) => {
  readdata.read_Chandauli(function(datas) {
    res.render('uttarpradesh/Chandauli/Chandauli.hbs', {data: datas});
  });
});
router.get('/Chandauli_all', (req, res) => {
  
    res.render('uttarpradesh/Chandauli/Chandauli_allmandi.hbs');
 
});

// UPDATES
router.get('/Chandauli@40533', (req, res) => {
  readdata.read_Chandauli(function(datas) {
    res.render('uttarpradesh/Chandauli/Chandauli_Update.hbs',{data: datas});
  });
});



module.exports = router;
