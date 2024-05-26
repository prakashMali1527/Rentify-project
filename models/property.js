const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    nearby: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;