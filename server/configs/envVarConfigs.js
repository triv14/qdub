const dotenv = require('dotenv');

dotenv.config();

const config = {
    local_db: {
        name: process.env.DATABASE_NAME_1,
        user: process.env.USER_NAME_1,
        password: process.env.PASSWORD_1,
        host: process.env.LOCAL_HOST,
        port: process.env.PORT_5433
    }
}

module.exports = config;