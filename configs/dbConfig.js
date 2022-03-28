module.exports = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "Admin@123",
  DB: "NodeJs",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
