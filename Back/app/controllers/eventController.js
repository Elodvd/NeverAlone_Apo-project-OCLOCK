const { Event } = require('../models');

const eventController = {

/* This is a function that will recover all events. */
  async getAll(req, res, next) {
    try {
      const events = await Event.findAll();
      res.json(events);
    } catch (err) {
      next(err);
    }
  },
  /* A function that will recover one event. */
  async getOne(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      const event = await Event.findByPk(id);
      if (!event) {
        return res.status(404).json({ error: `L'évenement n'existe pas` });
      }
      res.json(event);
    } catch (err) {
      next(err);
    }
  },

  /* Creating an event. */
  async create(req, res, next) {
    try {
      const event = await Event.create(req.body, {
        silent: true,
      });
      res.json(event);
    } catch (err) {
      next(err);
    }
  },
  /* A function that will update an event. */
  async update(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      const result = await Event.update(req.body, {
        where: {
          id,
        },
        returning: true,
      });
      const event = result[1][0];
      res.json(event);
    } catch (err) {
      next(err);
    }
  },
  /* A function that will delete an event. */
  async delete(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      const result = await Event.destroy({
        where: { id },
      });
      if (!result) {
        return res.status(404).json({ error: `L'évènement n'existe pas` });
      }
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  },
};

module.exports = eventController;
