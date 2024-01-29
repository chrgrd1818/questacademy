const express = require('express');
require("dotenv").config();
const cors = require('cors');
const router = require("express").Router();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const courses = require('./routes/courses')


app.get("/", (req, res) => res.send("HOME"));

app.use('/courses', courses)


app.listen(process.env.PORT, () =>
  console.log(
    new Date().toLocaleTimeString() + `: Server is running on port ${process.env.PORT}...`
  )
);