const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    resturant: { type: mongoose.Types.ObjectId, ref: "resturant", required: true },
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ["veg", "non-veg"] },
    price: { type: String, required: true },
    decs: { type: String, required: true },
    catagory: { type: String, required: true },
    image: { type: String, required: true },
    isavailable: { type: Boolean, default: true },
}, { timestamps: true })

module.exports = mongoose.model("menu", menuSchema)