const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Etawah_read');

const {add_Bharthana,add_Jaswantnagar, add_Etawah
 } = require('../src/controller/Etawah_Update');
router.post('/Bharthana', add_Bharthana);
router.post('/Jaswantnagar', add_Jaswantnagar);
router.post('/Etawah',add_Etawah);




router.get('/Etawah', (req, res) => {
  readdata.read_Etawah(function(datas) {
    res.render('uttarpradesh/Etawah/Etawah.hbs', {data: datas});
  });
});
router.get('/Etawah_all', (req, res) => {
  
    res.render('uttarpradesh/Etawah/Etawah_allmandi.hbs');
 
});
router.get('/Bharthana', (req, res) => {
  readdata.read_Bharthana(function(datas) {
    res.render('uttarpradesh/Etawah/Bharthana.hbs', {data: datas});
  });
});

router.get('/Jaswantnagar', (req, res) => {
  readdata.read_Jaswantnagar(function(datas) {
   res.render('uttarpradesh/Etawah/Jaswantnagar.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Etawah@4056', (req, res) => {
  readdata.read_Etawah(function(datas) {
    res.render('uttarpradesh/Etawah/Etawah_Update.hbs',{data: datas});
  });
});
router.get('/Bharthana@7698', (req, res) => {
  readdata.read_Bharthana(function(datas) {
    res.render('uttarpradesh/Etawah/Bharthana_Update.hbs',{data: datas} );
  });  
});
router.get('/Jaswantnagar@1299', (req, res) => {
  readdata.read_Jaswantnagar(function(datas) {
   res.render('uttarpradesh/Etawah/Jaswantnagar_Update.hbs',{data: datas} );
  }); 
});


module.exports = router;
