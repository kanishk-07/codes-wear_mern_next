const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    products: [{
        productId: { type: String },
        quantity: { type: Number, default: 1 }
    }],
    address: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Pending',
        required: true
    }
}, {
    timestamps: true
});
const Order = mongoose.models.Order || mongoose.model('orders', OrderSchema);
module.exports = Order;