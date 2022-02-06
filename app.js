const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const foods = require('./database/food.js');
const foodSchema = require('./database/data');
const blogRouter = require('./router/blog.js');
const writeRouter = require('./router/write.js');
const dateFilter = require('nunjucks-date-filter');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const mongoose = require('mongoose');

app.set('view engine', 'html');
photo = path.join(path.join(__dirname, 'resource', 'static'));
app.use('/', express.static(photo));
app.use('/blog', express.static(photo));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'resource/static/assets/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
app.post('/blog/', upload.single('img'), (req, res) => {
  const section = req.body.section;
  const name = req.body.name;
  const content = req.body.content;
  const img = `/assets/uploads/${req.file.filename}`;
  const pubDate = new Date().toString();
  const modDate = new Date().toString();
  let food = { section, name, content, img, pubDate, modDate };
  foods.push(food);
  let data = foods;

  let Food = new foodSchema();
  Food.section = section;
  Food.name = name;
  Food.content = content;
  Food.img = img;
  Food.pubDate = pubDate;
  Food.modDate = modDate;

  Food.save(function (err) {
    if (err) {
      throw err;
    } else {
      res.json({ status: 'SUCCESS' });
    }
  });
  res.render('post.html', { data });
});

let env = nunjucks.configure('resource/template', {
  autoescape: true,
  express: app,
  watch: true,
});
env.addFilter('date', dateFilter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res, next) => {
  res.render('index.html');
});
app.use('/blog', blogRouter);
app.use('/write', writeRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.log('애러났음!');
  console.log(err);
  res.sendStatus(500);
});
app.listen(8080);
