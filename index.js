const express = require('express');
require("dotenv").config();
const cors = require('cors');
const router = require("express").Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.DATABASE_URL,process.env.DATABASE_KEY);


router.get("/", (req, res) => res.send("Hello World!"));



//api.use("/api/", router);

// Get all articles
app.get("/courses", async (_, response) => {
  try {
    const { data, error } = await supabase.from("COURSES").select('*');
    

    return response.send(data);
  } catch (error) {
    console.error(error)
    return response.send({ error });
  }
});

app.listen(process.env.PORT, () =>
  console.log(
    new Date().toLocaleTimeString() + `: Server is running on port ${process.env.PORT}...`
  )
);