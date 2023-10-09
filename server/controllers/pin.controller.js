const Pin = require("../models/pin.model");

module.exports.create_pin = (req, res) =>{
    Pin.create(req.body)
    .then(pin => res.json(pin))
    .catch(err =>{
        res.status(400).json(err)
    });
}

module.exports.get_all = (req, res) => {
    Pin.find()
    .then(museos => res.json(museos))
    .catch(err => {res.status(400).json(err)});
}
