const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Mirzapur_read');

const {add_Mirzapur,add_Ahiraura
 } = require('../src/controller/Mirzapur_Update');
router.post('/Mirzapur', add_Mirzapur);
router.post('/Ahiraura',add_Ahiraura);



router.get('/Mirzapur', (req, res) => {
  readdata.read_Mirzapur(function(datas) {
    res.render('uttarpradesh/Mirzapur/Mirzapur.hbs', {data: datas});
  });
});
router.get('/Mirzapur_all', (req, res) => {
  
    res.render('uttarpradesh/Mirzapur/Mirzapur_allmandi.hbs');
 
});
router.get('/Ahiraura', (req, res) => {
  readdata.read_Ahiraura(function(datas) {
    res.render('uttarpradesh/Mirzapur/Ahiraura.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Mirzapur@40533', (req, res) => {
  readdata.read_Mirzapur(function(datas) {
    res.render('uttarpradesh/Mirzapur/Mirzapur_Update.hbs',{data: datas});
  });
});
router.get('/Ahiraura@69', (req, res) => {
  readdata.read_Ahiraura(function(datas) {
    res.render('uttarpradesh/Mirzapur/Ahiraura_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
