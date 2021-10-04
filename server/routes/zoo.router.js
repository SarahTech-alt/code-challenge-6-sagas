const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    queryText = `SELECT "species"."species_name", "class"."class_name" from "species"
    JOIN "class" ON "species"."class_id"="class"."id";`
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {res.sendStatus(500)});
});

router.post('/', (req, res) => {
    console.log(req.body);
    const animalInfo = req.body;
    queryText = `INSERT INTO "species" ("species_name", "class_id")
    VALUES ($1,$2)`;
    pool.query(queryText,[animalInfo.species_name, animalInfo.class_id])
}).then(result => {
    res.sendStatus(200);
}).catch(err => {
    console.log('There was an error posting to the database', err);
    res.sendStatus(500)
})


module.exports = router;