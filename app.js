const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const blogRouter = require('./router/blog.js');
const dateFilter = require('nunjucks-date-filter');
const path = require('path');

app.set('view engine', 'html');
photo = path.join(path.join(__dirname, 'resource', 'static'));
app.use('/', express.static(photo));
app.use('/blog', express.static(photo));

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

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.log('애러났음!');
  console.log(err);
  res.sendStatus(500);
});
app.listen(8080);
