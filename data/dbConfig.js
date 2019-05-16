const knex = require('knex');
const config = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development';
//add Config Vars on Heroku --- 
//DB_ENV production

//Run npx heroku run knex:latest -a testing-guided
//to migrate latest on heroku app



module.exports = knex(config[dbEnv]);
