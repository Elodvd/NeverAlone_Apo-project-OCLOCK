const { User } = require('../models');

const profilController = {
  //All profil recovery
  async getAll(req, res, next) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  },
  //Profile recovery
  async getOne(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: `le profil n'existe pas` });
      }
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
  //Modification of a profil
  async update(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      const result = await User.update(req.body, {
        where: {
          id,
        },
        returning: true,
      });
      const user = result[1][0];
      res.json(user);
    } catch (err) {
      next(err);
    }
  },

  //delete a profil
  async delete(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      const result = await User.destroy({
        where: { id },
      });
      if (!result) {
        return res.status(404).json({ error: `le profil n'existe pas` });
      }
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  },
};

module.exports = profilController;