const mongoose = require('mongoose');
const { Schema } = mongoose;

const mapSchema = Schema({
  name: String,
  description: String,
  latitude: Number,
  longitude: Number,
  locations: [ { type: Schema.Types.ObjectId, ref: 'Location'} ]
});

mongoose.model('maps', mapSchema);

