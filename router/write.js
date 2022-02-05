const express = require('express');
let foods = require('../database/food');
const router = express.Router();
const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.filename);
//   },
// });

// const upload = multer({ storage: storage });
// router.post('/blog', upload.single('img'), (req, res) => {
//   console.log(req.file);
// });

router.get('/', (req, res, next) => {
  res.render('write.html');
});

module.exports = router;
