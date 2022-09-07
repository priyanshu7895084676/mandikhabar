const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,
});
const readdata = require('../models/Kannaujread');
const {addKannuaj, addChhibramau,
} =require('../src/controller/Kannaujcontroller');
router.post('/kannauj', addKannuaj);
router.post('/chhibramau', addChhibramau);

router.get('/kannauj', (req, res) => {
  readdata.readKannauj(function(datas) {
    res.render('uttarpradesh/Kannauj/Kannauj.hbs', {data: datas});
   
  });
});
router.get('/kannauj_all', (req, res) => {
 
    res.render('uttarpradesh/Kannauj/Kannauj_allmandi.hbs' );
  
});
router.get('/chhibramau', (req, res) => {
  readdata.readChhibramau(function(datas) {
    res.render('uttarpradesh/Kannauj/chhibramau.hbs', {data: datas});
    
  });
});

//updates routes
router.get('/kannauj@0083', (req, res) => {
  readdata.readKannauj(function(datas) {
   res.render('uttarpradesh/Kannauj/kannaujUpdates.hbs', {data: datas});
  
  });
});

router.get('/chhibramau@783', (req, res) => {
  readdata.readChhibramau(function(datas) {
    res.render('uttarpradesh/Kannauj/chhibramauUpdates.hbs', {data: datas});
    
  });
});
module.exports = router;
