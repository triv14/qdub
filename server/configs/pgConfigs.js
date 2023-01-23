const config = require('./envVarConfigs');

const dbConfig = config.local_db;


const knex = require('knex')({
    client: 'pg',
    connection: {
        host: dbConfig.host,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        port: dbConfig.port
    }
})

// example for knex -- to connect to db & execute queries
// async function start() {

//     try {
//         const a = await knex.raw('select 1 + 1 AS verification');
//         console.log(a);
//     } catch (e) {
//         console.error(e);
//     };
// }

// start();