const express = require('express');

const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({
        ok: true,
        service: 'jobs-demo-api'
    });
});

module.exports = app;