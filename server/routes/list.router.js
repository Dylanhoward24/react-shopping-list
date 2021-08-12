const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
    const sqlText = `
        SELECT * FROM "shopping"
    `;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        }).catch(err => {
            console.log('GET /list error', err)
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const newItem = req.body;
    const sqlText = `
        INSERT INTO "shopping" ("name", "quantity", "unit")
        VALUES ($1, $2, $3)
    `;
    pool.query(sqlText, [newItem.name, newItem.quantity, newItem.unit])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            res.sendStatus(500);
        });
});

module.exports = router;