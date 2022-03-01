require('dotenv').config();
const port = process.env.PORT || 3002;

const express = require('express');
const app = express();

const cors = require('cors');
const router = require('./app/routers/index.js');

app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
// config de base pour récupération de caractères
app.use(express.json());
app.use(router);

app.listen(port, (_) => {
    console.log(`http://localhost:${port}`);
});
