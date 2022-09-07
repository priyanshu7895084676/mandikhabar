const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Hathras_read');

const {add_Sadabad,add_SikandaraRao, add_Hathras
 } = require('../src/controller/Hathras_Update');
router.post('/Sadabad', add_Sadabad);
router.post('/SikandraRao', add_SikandaraRao);
router.post('/Hathras',add_Hathras);




router.get('/Hathras', (req, res) => {
  readdata.read_Hathras(function(datas) {
    res.render('uttarpradesh/Hathras/Hathras.hbs', {data: datas});
  });
});
router.get('/Hathras_all', (req, res) => {
  
    res.render('uttarpradesh/Hathras/Hathras_allmandi.hbs');
 
});
router.get('/Sadabad', (req, res) => {
  readdata.read_Sadabad(function(datas) {
    res.render('uttarpradesh/Hathras/Sadabad.hbs', {data: datas});
  });
});

router.get('/SikandraRao', (req, res) => {
  readdata.read_SikandraRao(function(datas) {
   res.render('uttarpradesh/Hathras/SikandraRao.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Hathras@4056', (req, res) => {
  readdata.read_Hathras(function(datas) {
    res.render('uttarpradesh/Hathras/Hathras_Update.hbs',{data: datas});
  });
});
router.get('/Sadabad@7698', (req, res) => {
  readdata.read_Sadabad(function(datas) {
    res.render('uttarpradesh/Hathras/Sadabad_Update.hbs',{data: datas} );
  });  
});
router.get('/SikandraRao@1299', (req, res) => {
  readdata.read_SikandraRao(function(datas) {
   res.render('uttarpradesh/Hathras/SikandraRao_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
