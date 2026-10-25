const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const visitorSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    purpose: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },
    visitDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected", "checked-in", "checked-out"],
        default: "pending"
    }
}, { timestamps: true })

module.exports = mongoose.model("Visitor", visitorSchema)