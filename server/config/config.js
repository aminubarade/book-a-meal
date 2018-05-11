module.exports = {
  development: {
    username: process.env.DB_USER || 'barade',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'bookameal',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
