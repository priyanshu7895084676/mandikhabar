const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Bijnor_read');

const {add_Bijnor, add_Chandpur,
  add_Dhampur,
  add_Haldaur,
  add_Kiratpur,
  add_Nagina,
  add_Najibabad,
  
 } = require('../src/controller/Bijnor_Update');
router.post('/Bijnor', add_Bijnor);
router.post('/Chandpur', add_Chandpur);
router.post('/Dhampur', add_Dhampur);
router.post('/Haldaur', add_Haldaur);
router.post('/Kiratpur', add_Kiratpur);
router.post('/Nagina', add_Nagina);
router.post('/Najibabad', add_Najibabad);



router.get('/Bijnor', (req, res) => {
  readdata.read_Bijnor(function(datas) {
    res.render('uttarpradesh/Bijnaur/Bijnor.hbs', {data: datas});
  });
});
router.get('/Bijnor_all', (req, res) => {
  
    res.render('uttarpradesh/Bijnaur/Bijnor_allmandi.hbs');
 
});
router.get('/Chandpur', (req, res) => {
  readdata.read_Chandpur(function(datas) {
    res.render('uttarpradesh/Bijnaur/Chandpur.hbs', {data: datas});
  });
});

router.get('/Dhampur', (req, res) => {
  readdata.read_Dhampur(function(datas) {
   res.render('uttarpradesh/Bijnaur/Dhampur.hbs', {data: datas});
  });
});
router.get('/Haldaur', (req, res) => {
  readdata.read_Haldaur(function(datas) {
   res.render('uttarpradesh/Bijnaur/Haldaur.hbs', {data: datas});
  });
});
router.get('/Kiratpur', (req, res) => {
 readdata.read_Kiratpur(function(datas) {
   res.render('uttarpradesh/Bijnaur/Kiratpur.hbs', {data: datas});
  });
});
router.get('/Nagina', (req, res) => {
  readdata.read_Nagina(function(datas) {
    res.render('uttarpradesh/Bijnaur/Nagina.hbs', {data: datas});
  });
});
router.get('/Najibabad', (req, res) => {
  readdata.read_Najibabad(function(datas) {
    res.render('uttarpradesh/Bijnaur/Najibabad.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Bijnor@456', (req, res) => {
  readdata.read_Bijnor(function(datas) {
    res.render('uttarpradesh/Bijnaur/Bijnor_Update.hbs',{data: datas});
  });
});
router.get('/Chandpur@4541', (req, res) => {
  readdata.read_Chandpur(function(datas) {
    res.render('uttarpradesh/Bijnaur/Chandpur_Update.hbs',{data: datas} );
  });  
});
router.get('/Dhampur@4512', (req, res) => {
  readdata.read_Dhampur(function(datas) {
   res.render('uttarpradesh/Bijnaur/Dhampur_Update.hbs',{data: datas} );
  }); 
});
router.get('/Haldaur@451', (req, res) => {
  readdata.read_Haldaur(function(datas) {
   res.render('uttarpradesh/Bijnaur/Haldaur_Update.hbs',{data: datas});
  });
});
router.get('/Kiratpur@1282', (req, res) => {
  readdata.read_Kiratpur(function(datas) {
    res.render('uttarpradesh/Bijnaur/Kiratpur_Update.hbs',{data: datas});
  });  
 });
router.get('/Nagina@456734', (req, res) => {
  readdata.read_Nagina(function(datas) {
    res.render('uttarpradesh/Bijnaur/Nagina_Update.hbs',{data: datas});
  });
});
router.get('/Najibabad9@7865', (req, res) => {
  readdata.read_Najibabad(function(datas) {
    res.render('uttarpradesh/Bijnaur/Najibabad_Update.hbs',{data: datas});
  });
});

module.exports = router;
