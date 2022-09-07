const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/SantRaviDasNagar_read');

const {add_SantRavidasNagar,
 } = require('../src/controller/SantRaviDasNagar_Update');
router.post('/Gopiganj', add_SantRavidasNagar);




router.get('/Gopiganj', (req, res) => {
  readdata.read_SantRavidasNagar(function(datas) {
    res.render('uttarpradesh/SantRavidasNagar/Gopiganj.hbs', {data: datas});
  });
});
router.get('/SantRavidasNagar_all', (req, res) => {
  
    res.render('uttarpradesh/SantRavidasNagar/SantRavidasNagar_allmandi.hbs');
 
});

// UPDATES
router.get('/SantRavidasNagar@40533', (req, res) => {
  readdata.read_SantRavidasNagar(function(datas) {
    res.render('uttarpradesh/SantRaviDasNagar/Gopiganj_Update.hbs',{data: datas});
  });
});



module.exports = router;
