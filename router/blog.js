const express = require('express');
const path = require('path');
let foods = require('../database/food');
const multer = require('multer');
const router = express.Router();

photo = path.join(path.join(__dirname, 'resource', 'static'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.filename);
  },
});

const upload = multer({ storage: storage });
router.post('/write', upload.single('img'), (req, res) => {
  console.log(storage);
  console.log(req.file);
  res.render('write.html');
});

router.get('/', (req, res, next) => {
  const section = req.query.section;
  let data = section
    ? foods.filter((b) => b.section === section).slice(0, 3)
    : foods;
  res.render('post.html', { data });
});
router.get('/write', (req, res, next) => {
  res.render('write.html');
});
router.post('/', (req, res, next) => {
  const id = foods.length + 1;
  const section = req.body.section;
  const name = req.body.name;
  const content = req.body.content;
  const img = req.body.img;
  const pubDate = new Date().toString();
  const modDate = new Date().toString();
  let food = { id, section, name, content, img, pubDate, modDate };
  foods.push(food);
  res.redirect('/blog/');
});
router.get('/', (req, res, next) => {
  res.render('post.html', { data });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  let food = foods.find((b) => b.id == id);
  res.render('postdetail.html', { food });
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const food = foods.find((b) => b.id == id);
  if (food) {
    food.section = req.body.section;
    food.name = req.body.name;
    food.content = req.body.content;
    food.img = req.body.img;
    food.modDate = new Date().toString();
    res.status(200).json(foods);
  } else {
    res.status(404);
  }
});

// 삭제(DELETE) : blog/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  foods = foods.filter((b) => b.id != id);
  res.status(200).json(foods);
});

module.exports = router;
module.exports.foods = foods;
