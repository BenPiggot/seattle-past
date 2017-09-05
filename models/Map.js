const mongoose = require('mongoose');
const { Schema } = mongoose;

const mapSchema = Schema({
  name: String,
  description: String,
  latitude: Number,
  longitude: Number
});

mongoose.model('maps', mapSchema);

