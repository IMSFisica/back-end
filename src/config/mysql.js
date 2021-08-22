require('dotenv').config()

module.exports = {
    development:{
        dialect: process.env.MYSQL_DIALECT,
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        define: {
            timestamps: true,
            underscored: true
        }
    },
    test:{
        dialect: process.env.MYSQL_DIALECT,
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB_TEST,
        define: {
            timestamps: true,
            underscored: true
        }
    },
    production:{
        dialect: process.env.MYSQL_DIALECT,
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB_PRODUCTION,
        define: {
            timestamps: true,
            underscored: true
        }
    }


}
//timestamps: aplis creatad_at and updated_at
//underscored: pass camel case to snake case{ ThisCase to this_case }