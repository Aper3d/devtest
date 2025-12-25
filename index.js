const express = require('express');
const { Pool } = require('pg');

const app = express();

const PORT = process.env.PORT || 3000;

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
});

app.get('/', (req, res) => {
    res.send('Hello from Express.js with PostgreSQL!');
});

app.get('/health', async (req, res) => {
    try {
        await pool.query('SELECT 1');
        res.status(200).json({ status: 'ok', db: 'connected' });
    } catch (error) {
        res.status(500).json({ status: 'error', db: 'disconnected' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});