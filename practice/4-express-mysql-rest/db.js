var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: "127.0.0.1",
    user: 'root',
    database: 'test'
  }
});

var bookshelf = require('bookshelf')(knex);

var Race = bookshelf.Model.extend({
  tableName: 'races',
  heroes: function(){
    return this.hasMany(Hero);
  }
});

var Hero = bookshelf.Model.extend({
  tableName: 'heroes',
  race: function(){
    return this.belongsTo(Race);
  }
});

module.exports = {knex, Race, Hero};
