// package pour gestion de token user
const jwt = require ('jsonwebtoken');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const port = process.env.PORT || 3002;
const url = process.env.URL
const app = express();

app.use(express.json()); // config de base pour récupération de caractères
app.use(express.urlencoded({extended:true}));

const user= {
  id: 42,
  name: 'Jean bon',
  email : 'jb@gmail.com',
  admin: true,
};


function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'});
}

const accessToken = generateAccessToken(user);
console.log('accessToken', accessToken);

