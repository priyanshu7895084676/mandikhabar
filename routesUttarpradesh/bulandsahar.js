const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const readdata = require('../models/Bulansahar_read');

const {add_Bulandsahar, add_Anupshahar,
  add_Bhikarpur,
  add_Dibai,
  add_Gulaothi,
  add_Jahangirabad,
  add_Khurja,
  add_Shikarpur,
  add_Siana,
  add_Sikandrabad,
 } = require('../src/controller/Bulandsahar_Update');
router.post('/Bulandshahar', add_Bulandsahar);
router.post('/Anupshahar', add_Anupshahar);
router.post('/Bhikarpur', add_Bhikarpur);
router.post('/Dibai', add_Dibai);
router.post('/Gulaothi', add_Gulaothi);
router.post('/Jahangirabad', add_Jahangirabad);
router.post('/Khurja', add_Khurja);
router.post('/Shikarpur', add_Shikarpur);
router.post('/Siana', add_Siana);
router.post('/Sikandrabad', add_Sikandrabad);

router.get('/Bulandsahar', (req, res) => {
  readdata.read_Bulandsahar(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Bulandshahar.hbs', {data: datas});
  });
});
router.get('/Bulandsahar_all', (req, res) => {
  
    res.render('uttarpradesh/Bulandsahar/Bulandshahar_allmandi.hbs');
 
});
router.get('/Anupshahar', (req, res) => {
  readdata.read_Anupshahar(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Anupshahar.hbs', {data: datas});
  });
});

router.get('/Bhikarpur', (req, res) => {
  readdata.read_Bhikarpur(function(datas) {
   res.render('uttarpradesh/Bulandsahar/Bhikarpur.hbs', {data: datas});
  });
});
router.get('/Dibai', (req, res) => {
  readdata.read_Dibai(function(datas) {
   res.render('uttarpradesh/Bulandsahar/Dibai.hbs', {data: datas});
  });
});
router.get('/Gulaothi', (req, res) => {
 readdata.read_Gulaothi(function(datas) {
   res.render('uttarpradesh/Bulandsahar/Gulaothi.hbs', {data: datas});
  });
});
router.get('/Jahangirabad', (req, res) => {
  readdata.read_Jahangirabad(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Jahangirabad.hbs', {data: datas});
  });
});
router.get('/Khurja', (req, res) => {
  readdata.read_Khurja(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Khurja.hbs', {data: datas});
  });
});
router.get('/Shikarpur', (req, res) => {
  readdata.read_Shikarpur(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Shikarpur.hbs', {data: datas});
  });
});

router.get('/Siana', (req, res) => {
    readdata.read_Siana(function(datas) {
      res.render('uttarpradesh/Bulandsahar/Siana.hbs', {data: datas});
    });
  });

  router.get('/Sikandrabad', (req, res) => {
    readdata.read_Sikandrabad(function(datas) {
      res.render('uttarpradesh/Bulandsahar/Sikandrabad.hbs', {data: datas});
    });
  });
// UPDATES
router.get('/Bulandsahar@456', (req, res) => {
  readdata.read_Bulandsahar(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Bulandshahar_Update.hbs',{data: datas});
  });
});
router.get('/Anupshahar@4541', (req, res) => {
  readdata.read_Anupshahar(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Anupshahar_Update.hbs',{data: datas} );
  });  
});
router.get('/Bhikarpur@4512', (req, res) => {
  readdata.read_Bhikarpur(function(datas) {
   res.render('uttarpradesh/Bulandsahar/Bhikarpur_Update.hbs',{data: datas} );
  }); 
});
router.get('/Dibai@451', (req, res) => {
  readdata.read_Dibai(function(datas) {
   res.render('uttarpradesh/Bulandsahar/Dibai_Update.hbs',{data: datas});
  });
});
router.get('/Gulaothi@1282', (req, res) => {
  readdata.read_Gulaothi(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Gulaothi_Update.hbs',{data: datas});
  });  
 });
router.get('/Jahangirabad@456734', (req, res) => {
  readdata.read_Jahangirabad(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Jahangirabad_Update.hbs',{data: datas});
  });
});
router.get('/Khurja9@7865', (req, res) => {
  readdata.read_Khurja(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Khurja_Update.hbs',{data: datas});
  });
});
router.get('/Siana@4589', (req, res) => {
  readdata.read_Siana(function(datas) {
    res.render('uttarpradesh/Bulandsahar/Siana_Update.hbs',{data: datas});
  }); 
});
router.get('/Sikandrabad@4589', (req, res) => {
    readdata.read_Sikandrabad(function(datas) {
      res.render('uttarpradesh/Bulandsahar/Sikandrabad_Update.hbs',{data: datas});
    }); 
  });
  router.get('/Shikarpur@4589', (req, res) => {
    readdata.read_Shikarpur(function(datas) {
      res.render('uttarpradesh/Bulandsahar/Shikarpur_Update.hbs',{data: datas});
    }); 
  });
module.exports = router;
