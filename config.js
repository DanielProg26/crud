module.exports = {
    production : {
        db : {
            connectionLimit : 10,
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'conta_system_db'
        }
    },
    development: {
        db : {
            connectionLimit : 10,
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'conta_system_db'
        }
    }
}[process.env.NODE_ENV];