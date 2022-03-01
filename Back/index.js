// package pour gestion de token user
const jwt = require ('jsonwebtoken');

require('dotenv').config();

const express = require('express');
const port = process.env.PORT || 3002;
const url = process.env.URL
const app = express();

app.use(express.json()); // config de base pour récupération de caractères
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

app.listen(port, (_) => {
  console.log(`http://localhost:${port}`);
});