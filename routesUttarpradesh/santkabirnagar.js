const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/SantKabirNagar_read');

const {add_SantKabirNagar,
 } = require('../src/controller/SantKabirNagar_Update');
router.post('/SantKabirNagar', add_SantKabirNagar);




router.get('/Khalilabad', (req, res) => {
  readdata.read_SantKabirNagar(function(datas) {
    res.render('uttarpradesh/SantKabirNagar/Khalilabad.hbs', {data: datas});
  });
});
router.get('/SantKabirNagar_all', (req, res) => {
  
    res.render('uttarpradesh/SantKabirNagar/SantKabirNagar_allmandi.hbs');
 
});

// UPDATES
router.get('/SantKabirNagar@40533', (req, res) => {
  readdata.read_SantKabirNagar(function(datas) {
    res.render('uttarpradesh/SantKabirNagar/Khalilabad_Update.hbs',{data: datas});
  });
});



module.exports = router;
