const { UniqueConstraintError, ValidationError } = require('sequelize');

const errorController = {
    notFound(_, res) {
        res.status(404).json({ error: `la route n'existe pas` });
    },

    error(err, req, res, next) {
        if (err instanceof UniqueConstraintError) {
            res.status(400).json({ error: `Entité déja existante` });
        } else if (err instanceof ValidationError) {
            res.status(400).json({ error: err.message });
        } else {
            console.error(err);
            res.status(500).json({ error: `Erreur interne du serveur` });
        }
    },
};

module.exports = errorController;
