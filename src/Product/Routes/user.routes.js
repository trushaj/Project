const express = require('express');
const pool = require('../../../db');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const users = await pool.query('select * from users');
        res.json({ users : users.rows});
    } catch (error) {
        res.status(500).json({ error : error.message });
    }
});

router.post('/', async(req, res) => {
    try {
        const hashedPassword =await bcrypt.hash(req.body.password,10);
        const newUser = await pool.query('insert into users (name, user_id, email, password) values ($1, $2, $3, $4) returning *', 
        [req.body.name,
        req.body.user_id,
        req.body.email,
        hashedPassword]);
        res.json({ users: newUser.rows[0]});    
    } catch (error) {
        res.status(500).json({ error : error.message });
    }
})

module.exports = router;