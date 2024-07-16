const express = require("express");
const fieldTypesRouter = express.Router();
const fieldTypesModel = require("../models/fieldTypes");
const FIELD_TYPES = require("../constants")

fieldTypesRouter.get("/view", async (req, res) => {
    const response = await fieldTypesModel.find();
    res.json({
        status: true,
        data: response
    })
});

fieldTypesRouter.post("/createBulk", async(req, res) => {
    await fieldTypesModel.insertMany(FIELD_TYPES);
    res.json({
        status: true,
        data: "Added successfully."
    })
})

module.exports = fieldTypesRouter;