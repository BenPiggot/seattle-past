const mongoose = require('mongoose');
const Location = mongoose.model('locations');
const NodeGeocoder = require('node-geocoder');

const options = { provider: 'google' }
const geocoder = NodeGeocoder(options);

module.exports = (app) => {
  app.post('/api/locations', async (req, res) => {
    const { name, address, description, media } = req.body;
    let latitude, longitude;
    const lookup = address || name;

    await geocoder.geocode(lookup, async (err, res) => {
      console.log(res)
      latitude = res[0].latitude;
      longitude = res[0].longitude;

      const location = new Location({ 
        place: name, 
        description: description, 
        media: media,
        latitude: latitude,
        longitude: longitude,
        user: req.user._id
      });

      const response = await location.save();
    });

    res.send(true);
  })

  app.get('/api/locations', async (req, res) => {
    const response = await Location.find();
    console.log(response)
    res.send(response)
  })
} 
