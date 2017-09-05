const mongoose = require('mongoose');
const { Schema } = mongoose;

const markerSchema = Schema({
  place: String,
  description: String,
  media: String,
  latitude: Number,
  longitude: Number
})

mongoose.model('markers', markerSchema);