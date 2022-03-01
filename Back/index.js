require('dotenv').config();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');

const router = require('./app/routers');

const port = process.env.PORT || 3000;

const app = express();

app.set('views', './app/views');

// Ce middlexare récupère les informations envoyé dans le formulaire et les organise bien dans request.body
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, (_) => {
  console.log(`http://localhost:${port}`);
});
