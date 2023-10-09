const Museo = require("../models/museo.model");

module.exports.get_all = (req, res) => {
    Museo.find().sort({museo: 1})
    //1 ASC 1-10 -1 DES 10-1
    .then(museos => res.json(museos))
    .catch(err => {res.status(400).json(err)});
}

//Crear un nuevo museo
module.exports.create_museo = (req,res) =>{
    Museo.findOne({museo: req.body.museo})
    .then(museos=>{
        if(museos != null){
            //Ya existe un museo con ese título
            let err = {"errors": {"museo":{"message": "El museo ya existe"}}};
            res.status(400).json(err);
        }
        else{
            Museo.create(req.body)
            .then(museos => res.json(museos))
            .catch(err => {res.status(400).json(err)});
        }
    })
}

//Regrese un museo en base a su ID
module.exports.get_museo = (req,res) => {
    Museo.findOne({_id: req.params.id})
    .then(museo => res.json(museo))
    .catch(err => {res.status(400).json(err)});
}

//Actualiza un museo
module.exports.update_museo = (req,res) =>{
    Museo.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}, {runValidators:true})
    .then(museo => res.json(museo))
    .catch(err => {res.status(400).json(err)});
}

//Borre museo en base a su ID
module.exports.delete_museo = (req, res) =>{
    Museo.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => {res.status(400).json(err)});
}