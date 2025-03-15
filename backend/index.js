/*backend index.js */
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(express.json());

// Allow CORS only from the frontend URL
const allowedOrigins = [
  "https://frontend-hqtr7rve1-lavanyamurudkars-projects.vercel.app", // Vercel frontend URL
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/tasks", taskRoutes);

const startServer = async () => {
  try {
    await sequelize.sync(); // Sync database
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

startServer();

module.exports = app;
