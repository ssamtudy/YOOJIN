const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://yoojin:qkrdbwls123@cluster0.o8pit.mongodb.net/map?retryWrites=true&w=majority'
);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB connected');
});

const Schema = mongoose.Schema;
let foodSchema = new Schema({
  section: String,
  name: String,
  content: String,
  dec: String,
  img: String,
  pubDate: String,
  modDate: String,
});

module.exports = mongoose.model('Food', foodSchema);
