const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
  facebookId: String,
  twitterId: String,
  email: String,
  username: String,
  avatar: String,
  markers: [ { type: Schema.Types.ObjectId, ref: 'Marker'} ]
});

mongoose.model('users', userSchema);