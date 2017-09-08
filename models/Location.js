const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema = Schema({
  place: String,
  address: String,
  description: String,
  media: String,
  latitude: Number,
  longitude: Number,
  approved: { type: Boolean, default: false },
  user: {  type: Schema.Types.ObjectId, ref: 'User' },
  map: { type: Schema.Types.ObjectId, ref: 'Map' }
})

mongoose.model('locations', locationSchema);