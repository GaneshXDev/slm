const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = 8000

//Models
const Task = require("./models/todoList");

dotenv.config();
app.use(express.json());
app.use('static', express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/add", async (req, res) => {
    const content = req?.body?.content;
    const newTask = new Task({ content: content });
    try {
        await newTask.save();
        res.json({ message: 'Saved' });
    } catch(err) {
        res.json({ message: err })
    }
});

app.get("/get", async (req, res) => {
    const allTasks = await Task.find({});
    res.json({ tasks: allTasks });
});

mongoose.connect(process.env.DB_CONNECT);
app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server started");
});
