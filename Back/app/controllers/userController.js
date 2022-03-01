const { User } = require('../models');
const jwt = require('jsonwebtoken');
//const emailValidator = require('email-validator');
//const bcrypt = require('bcryptjs');

const userController = {
    async loginAction(req, res) {
        try {
            // on tente de récupérer l'utilisateur qui possède l'email donné
            const user = await User.findOne({
                where: {
                    email: req.body.email,
                },
            });

            if (!user) {
                return res
                    .status(401)
                    .json({ error: 'Utilisateur non trouvé !' });
            }

            // Si on a un utilisateur, on teste si le mot de passe est valide
            if (req.body.password !== user.password) {
                return res
                    .status(401)
                    .json({ error: 'Mot de passe incorrect !' });
            }

            res.status(200).json({
                user: user,
                token: jwt.sign(
                    { user_id: user.id },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '24h' }
                ),
            });
        } catch (err) {
            console.trace(err);
            res.status(500).send(err.message);
        }
    },
};

module.exports = userController;
