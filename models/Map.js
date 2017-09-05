const mongoose = require('mongoose');
const { Schema } = mongoose;

const mapSchema = Schema({
  name: String,
  description: String,
  latitude: Number,
  longitude: Number,
  markers: [ { type: Schema.Types.ObjectId, ref: 'Marker'} ]
});

mongoose.model('maps', mapSchema);

