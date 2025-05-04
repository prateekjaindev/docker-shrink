const express = require("express");
const moment = require("moment");
const cors = require("cors");
const helmet = require("helmet");

// Initialize express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Hello from a slim Docker container!",
    timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    uptime: process.uptime(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP", memory: process.memoryUsage() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
}); 

// Start server
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // For testing