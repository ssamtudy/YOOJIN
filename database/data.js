const mongoose = require('mongoose');

const MONGODB_URI =
  'mongodb+srv://yoojin:qkrdbwls123@cluster0.o8pit.mongodb.net/map?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI);

mongoose.connect(MONGODB_URI);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB connected');
});

const uri = process.env.MONGODB_URI;

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
