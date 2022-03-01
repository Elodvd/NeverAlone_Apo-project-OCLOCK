
const Event = require('./event');
const Category = require('./category');
const User = require('./user');

//Un evenement peut etre crée par un seul utilisateur ***
Event.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
});

//Un utilisateur peut créer plusieurs evenements *****
User.hasMany(Event, {
  as: 'events',
  foreignKey: 'user_id',
});

//Un evenement peut être rejoint par plusieurs utilisateurs***
Event.belongsToMany(User, {
  as: 'users',
  through: 'event_has_user',
  foreignKey: 'event_id', // le nom de la clef de Event dans la table de liaison
  otherKey: 'user_id',
});

//Un utilisateur rejoint plusieurs evenements ****
User.belongsToMany(Event, {
  as: 'events',
  through: 'event_has_user',
  foreignKey: 'user_id', // le nom de la clef de Event dans la table de liaison
  otherKey: 'event_id',
});

//Un evenement peut avoir plusieurs catégories *****
Event.belongsToMany(Category, {
  as: 'categorys',
  through: 'event_has_tag',
  foreignKey: 'event_id', // le nom de la clef de Event dans la table de liaison
  otherKey: 'category_id', // le nom de la clef de "l'autre" (donc Tag)
});

//Une catégorie peut detenir plusieurs evenements *****
Category.belongsToMany(Event, {
  as: 'events',
  through: 'events_has_tag',
  foreignKey: 'category_id',
  otherKey: 'event_id',
});

module.exports = { User,Event, Category };