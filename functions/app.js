const express = require("express");
const cors = require("cors");
const { logger } = require("firebase-functions");

const routes = require("./routes/routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routes);

// Global error handling middleware
app.use((err, req, res, next) => {
  logger.error("Global Error Handler:", err);
  res.status(500).json({ error: err.message });
});

module.exports = app;
