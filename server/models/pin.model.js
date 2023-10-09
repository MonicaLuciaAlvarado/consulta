const mongoose = require("mongoose");

const pinSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            require: true
        },
        title:{
            type: String,
            require: true,
            min: 3
        },
        desc:{
            type: String,
            require: true,
            min: 3
        },
        lat:{
            type: Number,
            require: true
        },
        long:{
            type: Number,
            require: true
        }
    },{timestamps: true, versionKey:false}
)

const pin= mongoose.model("pines", pinSchema);
module.exports = pin;