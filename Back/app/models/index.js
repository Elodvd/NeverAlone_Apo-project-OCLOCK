
const Event = require('./event');
const Category = require('./category');
const User = require('./user');

//an event can be created by a user
Event.belongsTo(User, {
  as: 'author',
  foreignKey: 'user_id',
});

//an user can created many events
User.hasMany(Event, {
  as: 'UserEvent',
  foreignKey: 'user_id',
});

//an event can be joined by many users
Event.belongsToMany(User, {
  as: 'users',
  through: 'event_has_user',
  foreignKey: 'event_id', // le nom de la clef de Event dans la table de liaison
  otherKey: 'user_id',
});

//an user can join many events
User.belongsToMany(Event, {
  as: 'events',
  through: 'event_has_user',
  foreignKey: 'user_id', // le nom de la clef de Event dans la table de liaison
  otherKey: 'event_id',
});

//an event can have many category
Event.belongsToMany(Category, {
  as: 'categorys',
  through: 'event_has_tag',
  foreignKey: 'event_id', // le nom de la clef de Event dans la table de liaison
  otherKey: 'category_id', // le nom de la clef de "l'autre" (donc Category)
});

//an category can have many events
Category.belongsToMany(Event, {
  as: 'categoryEvents',
  through: 'events_has_tag',
  foreignKey: 'category_id',
  otherKey: 'event_id',
});

module.exports = { User,Event, Category };