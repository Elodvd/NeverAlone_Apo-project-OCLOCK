require('dotenv').config();
// package pour gestion de token user

const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const url = process.env.URL

const jwt = require ('jsonwebtoken');
const router = require('./app/routers');

// config de base pour récupération de caractères
app.use(express.json());
// Ce middlexare récupère les informations envoyé dans le formulaire et les organise bien dans request.body
app.use(express.urlencoded({extended:true}));

const user= {
  id: 42,
  name: 'Jean bon',
  email: 'jeanbon@gmail.com',
  admin: true,
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'});
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1y'});
}

const accessToken = generateAccessToken(user);
console.log(accessToken);


app.use(router);
app.listen(port, (_) => {
  console.log(`http://localhost:${port}`);
});