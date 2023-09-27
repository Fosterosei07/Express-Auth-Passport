const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const port = process.env.port || 4000;

const app = express();

app.get('/', (req, res) => {
    res.send('It is working')
})

app.listen(port, () => {
    console.log(`server connected on http://localhost:${port}`);
})