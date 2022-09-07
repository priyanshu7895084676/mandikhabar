const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/KanpurDehat_read');

const {add_Jhinjhak,add_Pukhrayan,add_Rura,
 } = require('../src/controller/KanpurDehat_Update');
router.post('/Jhinjhak', add_Jhinjhak);
router.post('/Pukhrayan', add_Pukhrayan);
router.post('/Rura', add_Rura);




router.get('/Jhinjhak', (req, res) => {
  readdata.readk_r(function(datas) {
    res.render('uttarpradesh/KanpurDehat/Jhinjhak.hbs', {data: datas});
  });
});
router.get('/KanpurDehat_all', (req, res) => {
  
    res.render('uttarpradesh/KanpurDehat/KanpurDehat_allmandi.hbs');
 
});
router.get('/Yusufpur', (req, res) => {
  readdata.readk_Yusufpur(function(datas) {
    res.render('uttarpradesh/KanpurDehat/Yusufpur.hbs', {data: datas});
  });
});

router.get('/Pukhrayan', (req, res) => {
  readdata.read_Pukhrayan(function(datas) {
   res.render('uttarpradesh/KanpurDehat/Pukhrayan.hbs', {data: datas});
  });
});
router.get('/Rura', (req, res) => {
  readdata.read_Rura(function(datas) {
   res.render('uttarpradesh/KanpurDehat/Rura.hbs', {data: datas});
  });
});

// UPDATES
router.get('/Jhinjhak@4056', (req, res) => {
  readdata.read_Jhinjhak(function(datas) {
    res.render('uttarpradesh/KanpurDehat/Jhinjhak_Update.hbs',{data: datas});
  });
});

router.get('/Pukhrayan@129', (req, res) => {
  readdata.read_Pukhrayan(function(datas) {
   res.render('uttarpradesh/KanpurDehat/Pukhrayan_Update.hbs',{data: datas} );
  }); 
});
router.get('/Rura@246', (req, res) => {
  readdata.read_Rura(function(datas) {
   res.render('uttarpradesh/KanpurDehat/Rura_Update.hbs',{data: datas});
  });
});

module.exports = router;
