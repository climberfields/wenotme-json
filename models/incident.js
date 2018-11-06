const mongoose = require('mongoose');


const incidentSchema = new mongoose.Schema({
  Incident: String,
  Location: String,
  Description: String,
  Photo: String   
});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Incident', incidentSchema);
