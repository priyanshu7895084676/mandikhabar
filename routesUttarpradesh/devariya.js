const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Devariya_read');

const {add_Devariya,
 } = require('../src/controller/Devariya_Update');
router.post('/Devariya', add_Devariya);




router.get('/Deoria', (req, res) => {
  readdata.read_Devariya(function(datas) {
    res.render('uttarpradesh/Devariya/Deoria.hbs', {data: datas});
  });
});
router.get('/Devariya_all', (req, res) => {
  
    res.render('uttarpradesh/Devariya/Devariya_allmandi.hbs');
 
});

// UPDATES
router.get('/Devariya@40533', (req, res) => {
  readdata.read_Devariya(function(datas) {
    res.render('uttarpradesh/Devariya/Deoria_Update.hbs',{data: datas});
  });
});



module.exports = router;
