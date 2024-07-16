const mongoose = require("mongoose");
const fieldTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("FieldTypes", fieldTypeSchema);