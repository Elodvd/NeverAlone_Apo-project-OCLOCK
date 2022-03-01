const Event = require('./event');
const Tag = require('./tag');
const User = require('./user');

Event.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
});

User.belongsToMany(Event, {
  as: 'events',
  through: 'event_has_user',
});

Event.belongsToMany(User, {
  as: 'users',
  through: 'event_has_user',
});

Event.belongsToMany(Tag, {
  as: 'tags',
  through: 'event_has_tag',
}); 

Tag.belongsToMany(Event, {
  as: 'events',
  through: 'events_has_tag',
});

module.exports = { User,Event, Tag };