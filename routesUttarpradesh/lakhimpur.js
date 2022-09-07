const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Lakhimpur_read');

const {add_Lakhimpur, add_Golagokarnnath,
  add_Maigalganj,
  add_Mohamadi,
  add_Paliakalan,
  add_Tikonia,
  
 } = require('../src/controller/Lakhimpur_Update');
router.post('/Lakhimpur', add_Lakhimpur);
router.post('/Golagokarnnath', add_Golagokarnnath);
router.post('/Maigalganj', add_Maigalganj);
router.post('/Mohamadi', add_Mohamadi);
router.post('/Paliakalan', add_Paliakalan);
router.post('/Tikonia', add_Tikonia);



router.get('/Lakhimpur', (req, res) => {
  readdata.read_Lakhimpur(function(datas) {
    res.render('uttarpradesh/Lakhimpur/Lakhimpur.hbs', {data: datas});
  });
});
router.get('/Lakhimpur_all', (req, res) => {
  
    res.render('uttarpradesh/Lakhimpur/Lakhimpur_allmandi.hbs');
 
});
router.get('/Golagokarnnath', (req, res) => {
  readdata.read_Golagokarnnath(function(datas) {
    res.render('uttarpradesh/Lakhimpur/Golagokarnnath.hbs', {data: datas});
  });
});

router.get('/Maigalganj', (req, res) => {
  readdata.read_Maigalganj(function(datas) {
   res.render('uttarpradesh/Lakhimpur/Maigalganj.hbs', {data: datas});
  });
});
router.get('/Mohamadi', (req, res) => {
  readdata.read_Mohamadi(function(datas) {
   res.render('uttarpradesh/Lakhimpur/Mohamadi.hbs', {data: datas});
  });
});
router.get('/Paliakalan', (req, res) => {
 readdata.read_Paliakalan(function(datas) {
   res.render('uttarpradesh/Lakhimpur/Paliakalan.hbs', {data: datas});
  });
});
router.get('/Tikonia', (req, res) => {
  readdata.read_Tikonia(function(datas) {
    res.render('uttarpradesh/Lakhimpur/Tikonia.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Lakhimpur@456', (req, res) => {
  readdata.read_Lakhimpur(function(datas) {
    res.render('uttarpradesh/Lakhimpur/Lakhimpur_Update.hbs',{data: datas});
  });
});
router.get('/Golagokarnnath@4541', (req, res) => {
  readdata.read_Golagokarnnath(function(datas) {
    res.render('uttarpradesh/Lakhimpur/Golagokarnnath_Update.hbs',{data: datas} );
  });  
});
router.get('/Maigalganj@4512', (req, res) => {
  readdata.read_Maigalganj(function(datas) {
   res.render('uttarpradesh/Lakhimpur/Maigalganj_Update.hbs',{data: datas} );
  }); 
});
router.get('/Mohamadi@451', (req, res) => {
  readdata.read_Mohamadi(function(datas) {
   res.render('uttarpradesh/Lakhimpur/Mohamadi_Update.hbs',{data: datas});
  });
});
router.get('/Paliakalan@1282', (req, res) => {
  readdata.read_Paliakalan(function(datas) {
    res.render('uttarpradesh/Lakhimpur/Paliakalan_Update.hbs',{data: datas});
  });  
 });
router.get('/Tikonia@456734', (req, res) => {
  readdata.read_Tikonia(function(datas) {
    res.render('uttarpradesh/Lakhimpur/Tikonia_Update.hbs',{data: datas});
  });
});

module.exports = router;