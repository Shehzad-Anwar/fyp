const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    brand: { type: String, required: true },
    addedBy: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String },
    color: { type: String },
    availableQty: { type: Number, required: true },
    rating: { type: Number, default: 3 },
    sellQty: { type: Number, default: 0 },
    sale: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    dilivaryCharges: { type: Number, default: 0 },
    bestSeller: { type: Boolean, default: false },
    top: { type: Boolean, default: false },
    newCollection: { type: Boolean, default: false },
    adminId: {
        type: mongoose.Schema.Types.ObjectId, // This AdminId is Refrencing 'Admin' collection.
        ref: 'Admin',
        required:true
    },

}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)