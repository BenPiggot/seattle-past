const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
  facebookId: String,
  twitterId: String,
  instagramId: String,
  email: String,
  username: String,
  avatar: String,
  locations: [ { type: Schema.Types.ObjectId, ref: 'Location'} ]
});

mongoose.model('users', userSchema);