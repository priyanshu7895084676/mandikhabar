const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Shravasti_read');

const {add_Shravasti
 } = require('../src/controller/Shrvasti_Update');
router.post('/Payagpur', add_Shravasti);




router.get('/Payagpur', (req, res) => {
  readdata.read_Shravasti(function(datas) {
    res.render('uttarpradesh/Shravasti/Payagpur.hbs', {data: datas});
  });
});
router.get('/Shravasti_all', (req, res) => {
  
    res.render('uttarpradesh/Shravasti/Shravasti_allmandi.hbs');
 
});

// UPDATES
router.get('/Shravasti@40533', (req, res) => {
  readdata.read_Shravasti(function(datas) {
    res.render('uttarpradesh/Shravasti/Payagpur_Update.hbs',{data: datas});
  });
});



module.exports = router;
