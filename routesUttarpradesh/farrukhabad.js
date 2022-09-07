const express = require('express');
const bodyparser = require('body-parser');

const readdata = require('../models/Farrukhabadreaddata');

const router = new express.Router();
bodyparser.urlencoded({
  extended: true,
});




router.get('/farrukhabad_all', (req, res) => {
  res.render('uttarpradesh/farrukhabad/farrukhabadtotalmandi.hbs');
});



router.get('/farrukhabadtable', (req, res) => {
  readdata.readData(function(datas) {
    res.render('uttarpradesh/farrukhabad/farrukhabadtable.hbs', {data: datas});
  });
});
// kaimganj routing for read data
router.get('/kamalganj', (req, res) => {
  readdata.readkamalganj(function(datas) {
    res.render('uttarpradesh/farrukhabad/kamalganj.hbs', {data: datas});
  });
});

// routing for kaimganj
router.get('/kaimganj', (req, res) => {
  readdata.readkaimganj(function(datas) {
    res.render('uttarpradesh/farrukhabad/kaimganj.hbs', {data: datas});
  });
});

// routing for mohammdabad
router.get('/mohammadabad', (req, res) => {
  readdata.readMohammadabad(function(datas) {
    
    res.render('uttarpradesh/farrukhabad/mohammadabad.hbs', {data: datas});
  });
});


//updates

router.get('/farrukhabad@3412', (req, res) => {
  readdata.readData(function(datas) {
    res.render('uttarpradesh/farrukhabad/farrukhabadcityupdates.hbs', {data: datas});
  }); 
});
// kaimganj routing for read data
router.get('/kamalganj@8240', (req, res) => {
  readdata.readkamalganj(function(datas) {
    res.render('uttarpradesh/farrukhabad/KamalganjUpdate.hbs', {data: datas});
  }); 
});

// routing for kaimganj
router.get('/kaimganj@1267', (req, res) => {
  readdata.readkaimganj(function(datas) {
    res.render('uttarpradesh/farrukhabad/kaimganjUpdates.hbs', {data: datas});
  
});
});
// routing for mohammdabad
router.get('/mohammadabad@5634', (req, res) => {
 
  readdata.readMohammadabad(function(datas) {
    res.render('uttarpradesh/farrukhabad/mohammadabadUpdates.hbs', {data: datas});
  }); 
});

const {addStudent,
  addKaimganj,
  addMohammabad,
  feedback,
  addKamalganj,
} = require('../src/controller/Farrukhabadcontroller');
router.post('/farrukhabad', addStudent);
router.post('/feedback', feedback);
router.post('/kamalganj', addKamalganj);
router.post('/kaimganj', addKaimganj);
router.post('/Mohammadabad', addMohammabad);
module.exports = router;
