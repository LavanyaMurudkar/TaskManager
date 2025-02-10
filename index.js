// backend/index.js
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(express.json());
app.use(cors());

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
