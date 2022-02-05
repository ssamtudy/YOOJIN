const express = require('express');
const { render } = require('nunjucks');
const path = require('path');
let foods = require('../database/food');
const router = express.Router();

photo = path.join(path.join(__dirname, 'resource', 'static'));
router.use('/blog/', express.static(photo));
router.get('/', (req, res, next) => {
  const section = req.query.section;
  let data = section
    ? foods.filter((b) => b.section === section).slice(0, 3)
    : foods;
  res.render('post.html', { data });
});

router.get('/', (req, res, next) => {
  res.render('post.html', { data });
});
router.get('/write', (req, res, next) => {
  res.render('write.html');
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
  console.log(req.params.id);
  foods = foods.filter((b) => b.id != id);
  res.status(200).json(foods);
  res.render('post.html', { data });
});

module.exports = router;
module.exports.foods = foods;
