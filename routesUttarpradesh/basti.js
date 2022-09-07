const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Basti_read');

const {add_Basti
 } = require('../src/controller/Basti_Update');
router.post('/Basti', add_Basti);




router.get('/Basti', (req, res) => {
  readdata.read_Basti(function(datas) {
    res.render('uttarpradesh/Basti/Basti.hbs', {data: datas});
  });
});
router.get('/Basti_all', (req, res) => {
  
    res.render('uttarpradesh/Basti/Basti_allmandi.hbs');
 
});

// UPDATES
router.get('/Basti@40533', (req, res) => {
  readdata.read_Basti(function(datas) {
    res.render('uttarpradesh/Basti/Basti_Update.hbs',{data: datas});
  });
});



module.exports = router;
