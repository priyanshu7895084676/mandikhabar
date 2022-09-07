const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Agrareaddata');

const {addAgra, addAchhnera,
  addFatehpursikri,
  addjagner,
  addJarar,
  addKhairagarh,
  addShamashabad,
  addFatehabad,
 } = require('../src/controller/Agracontroller');
router.post('/Agra', addAgra);
router.post('/Achhnera', addAchhnera);
router.post('/Fatehpursikri', addFatehpursikri);
router.post('/Jagner', addjagner);
router.post('/Jarar', addJarar);
router.post('/Khairagarh', addKhairagarh);
router.post('/Shamshabad', addShamashabad);
router.post('/Fatehabad', addFatehabad);


router.get('/agra', (req, res) => {
  readdata.readkAgra(function(datas) {
    res.render('uttarpradesh/Agra/Agra.hbs', {data: datas});
  });
});
router.get('/agra_all', (req, res) => {
  
    res.render('uttarpradesh/Agra/agra_allmandi.hbs');
 
});
router.get('/uttarUpdate', (req, res) => {
  
  res.render('uttarpradesh/uttarpradesh_update.hbs');

});
router.get('/achhnera', (req, res) => {
  readdata.readAchhnera(function(datas) {
    res.render('uttarpradesh/Agra/Achhnera.hbs', {data: datas});
  });
});

router.get('/fatehabad', (req, res) => {
  readdata.readFatehabad(function(datas) {
   res.render('uttarpradesh/Agra/Fatehabad.hbs', {data: datas});
  });
});
router.get('/fatehpursikri', (req, res) => {
  readdata.readFatehpursikri(function(datas) {
   res.render('uttarpradesh/Agra/FatehpurSikri.hbs', {data: datas});
  });
});
router.get('/jagner', (req, res) => {
 readdata.readJagner(function(datas) {
   res.render('uttarpradesh/Agra/Jagner.hbs', {data: datas});
  });
});
router.get('/jarar', (req, res) => {
  readdata.readJarar(function(datas) {
    res.render('uttarpradesh/Agra/Jarar.hbs', {data: datas});
  });
});
router.get('/khairagarh', (req, res) => {
  readdata.readKhairagarh(function(datas) {
    res.render('uttarpradesh/Agra/Khairagarh.hbs', {data: datas});
  });
});
router.get('/shamshabad', (req, res) => {
  readdata.readShamshabad(function(datas) {
    res.render('uttarpradesh/Agra/Shamshabad.hbs', {data: datas});
  });
});

// UPDATES
router.get('/agra@4556', (req, res) => {
  readdata.readkAgra(function(datas) {
    res.render('uttarpradesh/Agra/agraUpdates.hbs',{data: datas});
  });
});
router.get('/achhnera@4541', (req, res) => {
  readdata.readAchhnera(function(datas) {
    res.render('uttarpradesh/Agra/achhneraUpdates.hbs',{data: datas} );
  });  
});
router.get('/fatehabad@4512', (req, res) => {
  readdata.readFatehabad(function(datas) {
   res.render('uttarpradesh/Agra/fatehabadUpdates.hbs',{data: datas} );
  }); 
});
router.get('/fatehpursikri@4513', (req, res) => {
  readdata.readFatehpursikri(function(datas) {
   res.render('uttarpradesh/Agra/fatehpursikariUpdates.hbs',{data: datas});
  });
});
router.get('/jagner@1289', (req, res) => {
  readdata.readJagner(function(datas) {
    res.render('uttarpradesh/Agra/jagnerUpdates.hbs',{data: datas});
  });  
 });
router.get('/jarar@4567', (req, res) => {
  readdata.readJarar(function(datas) {
    res.render('uttarpradesh/Agra/jararUpdates.hbs',{data: datas});
  });
});
router.get('/khairagarh@7865', (req, res) => {
  readdata.readKhairagarh(function(datas) {
    res.render('uttarpradesh/Agra/khairagarhUpdates.hbs',{data: datas});
  });
});
router.get('/shamshabad@4589', (req, res) => {
  readdata.readShamshabad(function(datas) {
    res.render('uttarpradesh/Agra/shamshabadUpdates.hbs',{data: datas});
  }); 
});
module.exports = router;
