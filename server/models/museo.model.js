const mongoose = require("mongoose");

const museoSchema = new mongoose.Schema(
    {
        museo: {
            type:String,
            required: [true, "Museo no puede ir vacío"]
        },
        encargado: {
            type:String,
            required: [true, "Encargado no puede ir vacío"]
        },
        imagen: {
            type: String,
            required: [true, "Imagen no puede ir vacío"]
        },
        descripcion: {
            type: String,
            required: [true, "Descripcion no puede ir vacío"]
        },
        horario: {
            type: String,
            required: [true, "Horario no puede ir vacío"]
        },
        tipo: {
            type: String,
            required: [true, "Tipo no puede ir vacío"]
        },
        lugar: {
            type: String,
            required: [true, "Lugar no puede ir vacío"]
        },
        petfriendly: {
            type: Boolean,
            default: false,
        },
        ventadecomidas: {
            type: Boolean,
            default: false,
        },
        paginaweb: {
            type: String,
            required: [true, "Páginaweb no puede ir vacía"]
        }
    },{timestamps: true, versionKey:false}
)

const museo= mongoose.model("museos", museoSchema);
module.exports = museo;