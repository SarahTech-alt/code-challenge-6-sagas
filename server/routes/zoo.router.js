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

module.exports = router;