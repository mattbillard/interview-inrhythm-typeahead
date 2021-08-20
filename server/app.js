const express = require('express');
const cors = require('cors');
const countries = require('./countries');
const app = express();
const port = 3030;

app.use(cors());

app.get('/api/countries', (req, res) => {
    const text = req.query['q'];

    if (!text) return;

    const filtered = countries.filter(country => country.toLowerCase().includes(text.toLowerCase()));
    res.send(filtered)
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});