const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = 8000

dotenv.config();
app.use(express.json());
app.use('static', express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routers :: STARTS
const fieldTypesRouter = require("./router/fieldTypes");
app.use("/fieldtypes", fieldTypesRouter);

mongoose.connect(process.env.DB_CONNECT);
app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server started");
});
