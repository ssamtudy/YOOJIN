const express = require('express');
const { render } = require('nunjucks');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectId;
const foodSchema = require('../database/data');

photo = path.join(path.join(__dirname, 'resource', 'static'));
router.use('/', express.static(photo));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'resource/static/assets/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
let foods = [];

const upload = multer({ storage: storage });
router.post('/', upload.single('img'), (req, res) => {
  let Food = new foodSchema();
  Food.id = ObjectID.toString(req.body._id);
  Food.section = req.body.section;
  Food.name = req.body.name;
  Food.content = req.body.content;
  Food.dec = req.body.dec;
  Food.img = `/assets/uploads/${req.file.filename}`;
  Food.pubDate = new Date().toString();
  Food.modDate = new Date().toString();
  let food = Food;
  foods.push(food);
  let data = foods;
  Food.save(function (err) {
    if (err) {
      throw err;
    } else {
      res.render('post.html', { data });
    }
  });
});
router.get('/', (req, res, next) => {
  // const section = req.query.section;
  // let data = section
  //   ? foods.filter((food) => food.section === section).slice(0, 3)
  //   : foods;
  foodSchema.find(function (error, foods) {
    if (error) {
      console.log(error);
    } else {
      const section = req.query.section;
      let data = section
        ? foods.filter((food) => food.section === section).slice(0, 3)
        : foods;
      res.render('post.html', { data });
    }
  });
});

router.get('/', (req, res, next) => {
  foodSchema.find(function (error, foods) {
    if (error) {
      console.log(error);
    } else {
      res.render('post.html', { foods });
    }
  });
});

router.get('/write', (req, res, next) => {
  res.render('write.html');
});
router.get('/delete/:id', (req, res, next) => {
  res.render('delete.html');
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  foodSchema.find(function (error, foods) {
    if (error) {
      console.log(error);
    } else {
      let food = foods.find((food) => food.id == id);
      res.render('postdetail.html', { food });
    }
  });
});
router.delete('/delete/:id', (req, res, next) => {
  console.log(id);
  foodSchema.deleteOne({ id: req.params.id }, (err, foods) => {
    if (err) {
      return res.json(err);
    } else {
      console.log(foods);
      res.redirect('/');
    }
  });
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const food = foods.find((food) => food.id == id);
  if (food) {
    food.section = req.body.section;
    food.name = req.body.name;
    food.content = req.body.content;
    food.img = `/assets/uploads/${req.file.filename}`;
    food.modDate = new Date().toString();
    res.status(200).json(foods);
  } else {
    res.status(404);
  }
});

module.exports = router;
