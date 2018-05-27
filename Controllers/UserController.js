memanggil model database ke controller
let People = require('../Models/peoples');


exports.index = (req, res, next) => {
  // People.find(function(err,data){
  //   if(err) res.send(err);
  //   res.json(data);
  // })
}

exports.store = (req, res, next) => {
  // var people = new People();
  // people.nama = req.body.nama;
  // people.slogan = req.body.slogan;
  // people.save((err) =>{
  //   if(err) res.send(err);
  //   res.json({message : "OK"});
  // })
}

exports.show = (req, res, next) => {

}

exports.update = (req, res, next) => {

}

exports.delete = (req, res, next) => {

}
