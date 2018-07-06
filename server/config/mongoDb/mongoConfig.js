require('dotenv').config();

const options = {
    keepAlive: true,
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
  };

module.exports = {
  test: {
    databaseUrl: process.env.DB_DATABASEURL_TEST,
    databaseOption: options
  },

  development: {
    databaseUrl: process.env.DB_DATABASEURL_DEVELOPMENT,
    databaseOption: options
  },

  production: {
    databaseUrl: process.env.DB_DATABASEURL_PRODUCTION,
    databaseOption: options
  }
};