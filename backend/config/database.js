const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:root@localhost:5432/taskdb", {
  dialect: "postgres",
  logging: console.log, // Enable SQL query logging
});

sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database connection error:", err));

module.exports = sequelize;
