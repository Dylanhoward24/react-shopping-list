const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req,res) => {
    const sqlText = `
        SELECT * FROM "shopping"
    `;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        }).catch(err => {
            console.log('GET /list error', err)
            res.sendStatus(500);
        })

});

module.exports = router;