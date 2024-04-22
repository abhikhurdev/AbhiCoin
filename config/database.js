// config/database.js
module.exports = {
    development: {
      username: "your_username",
      password: "your_password",
      database: "abhicoins_dev",
      host: "localhost",
      dialect: "postgres"
    },
    production: {
        use_env_variable: "DATABASE_URL",
        dialect: "postgres"
      }
  };
  