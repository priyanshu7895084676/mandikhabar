const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Barabanki_read');

const {add_Barabanki,add_Safdarganj
 } = require('../src/controller/Barabanki_Update');
router.post('/Barabanki', add_Barabanki);
router.post('/Safdarganj',add_Safdarganj);



router.get('/Barabanki', (req, res) => {
  readdata.read_Barabanki(function(datas) {
    res.render('uttarpradesh/Barabanki/Barabanki.hbs', {data: datas});
  });
});
router.get('/Barabanki_all', (req, res) => {
  
    res.render('uttarpradesh/Barabanki/Barabanki_allmandi.hbs');
 
});
router.get('/Safdarganj', (req, res) => {
  readdata.read_Safdarganj(function(datas) {
    res.render('uttarpradesh/Barabanki/Safdarganj.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Barabanki@40533', (req, res) => {
  readdata.read_Barabanki(function(datas) {
    res.render('uttarpradesh/Barabanki/Barabanki_Update.hbs',{data: datas});
  });
});
router.get('/Safdarganj@69', (req, res) => {
  readdata.read_Safdarganj(function(datas) {
    res.render('uttarpradesh/Barabanki/Safdarganj_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
