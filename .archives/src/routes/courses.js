const express = require('express');
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.DATABASE_URL,process.env.DATABASE_KEY);

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

router.get("/", async (_, response) => {
    try {
        const { data, error } = await supabase.from("COURSES").select('*');
        return response.send(data);
    } catch (error) {
        console.error(error)
        return response.send({ error });
    }
  });

router.get('/about', (req, res) => {
  res.send('About courses')
});

module.exports = router;