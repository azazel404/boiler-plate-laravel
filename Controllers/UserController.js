let People = require('../Models/peoples');


exports.index = (req, res, next) => {
  People.find(function(err,data){
    if(err) res.send(err);
    res.json(data);
  })
}

exports.store = (req, res, next) => {
  res.send(req.body)
}

exports.show = (req, res, next) => {

}

exports.update = (req, res, next) => {

}

exports.delete = (req, res, next) => {

}
