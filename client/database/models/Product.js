const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    size: {
        type: String,
    },
    color: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    availableQty: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
mongoose.models = {}
const Product = mongoose.model('products', ProductSchema)
module.exports = Product