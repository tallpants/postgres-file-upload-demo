const knex = require('knex');

const config = require('../config').pg;

const dbClient = knex({
  client: 'pg',
  connection: { ...config }
});

module.exports = dbClient;
