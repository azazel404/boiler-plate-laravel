let mongoose = require('mongoose');
let Schema = mongoose.Schema;


var peopleSchema = new Schema({
  nama : String,
  slogan : String
})
let people = mongoose.model('People',peopleSchema);

module.exports = people;
