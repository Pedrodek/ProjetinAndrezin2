const { database, password } = require("pg/lib/defaults");

const env = {
    database: 'projetinSenac',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    dialect: 'postgres'
}


module.exports = env;
