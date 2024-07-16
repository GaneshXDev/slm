const mongoose = require("mongoose");
const fieldSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    fieldTypeId: {
        type: mongoose.Schema.ObjectId,
        ref: 'FieldTypes',
        required: true
    },
    options: {
        type: [String],
        required: false
    },
    disabled: {
        type: Boolean,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    createdBy: {
        type: Map,
        of: String,
        required: true
    },
    updatedOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedBy: {
        type: Map,
        of: String,
        required: true
    }
})

modules.exports = mongoose.model("Fields", fieldSchema);