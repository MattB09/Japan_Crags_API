require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: process.env.DB_USER,
            password: process.env.DB_PW,
            database: process.env.DB_NAME
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        },
    },
    production: {
        client: 'pg',
        connection: {
            host: process.env.HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PW,
            database: process.env.DB_NAME
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/production'
        },
    }
};