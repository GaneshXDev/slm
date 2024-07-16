const express = require("express");
const mongoose = require("mongoose");
const fieldTypesRouter = express.Router();
const fieldTypesModel = require("../models/fieldTypes");

fieldTypesRouter.get("/view", async (req, res) => {
    const response = await fieldTypesModel.find();
    res.json({
        data: response
    })
});

module.exports = fieldTypesRouter;