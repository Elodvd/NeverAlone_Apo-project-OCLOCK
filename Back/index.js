require('dotenv').config();

const express = require('express');
const port = process.env.PORT || 3002;
const app = express();

// package pour gestion de token user
const jwt = require ('jsonwebtoken');


//**************************** */





app.use(express.json()); // config de base pour récupération de caractères
app.use(express.urlencoded({extended:true}));


const user= {
    GET USER FROM BACK
};

function generateAccesToken(user){
    return jwt.sign(user.process.env.ACCESS_TOKEN_SECRET, {expireIn:'1800s'});
}

const accesToken = generateAccesToken(user);

//statut non autorisé
app.post('/api/login', (req, res)=> {
if (req.body.email !== user.email){
    res.status(401).send('Email invalide ou non connu'); 
    return
}
if(req.body.password !== user.password){
    res.status(401).send('Mot de passe incorect');
    return
}

const accesToken = generateAccesToken(user);
res.send({
    accesToken,
});
});

function authenticateToken(req, res, next){
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split('')[1]; // on doit passer le jwt dans le header avec comme valeur Bearer, convention de nomage

if (!token){
    return res.sendStatus(401);
}
jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
 if(err){
    return res.sendStatus(401);
 }
 req.user = user; //si pas d'erreur on récupère le user
 next(); //on appelle next pour que ca passe dans la logique d ela route API
});
}

app.get ('/api.me', authenticateToken, (req, res)=>{
    res.send(req.user); // on retourne le user
})

//**************************** */


app.listen(port, (_) => {
  console.log(`http://localhost:${port}`);
});
