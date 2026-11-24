const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const routes = require("./routes");
const config = require("./config/env");
const notFound = require("./middlewares/not-found.middleware");
const errorHandler = require("./middlewares/error.middleware");
const logger = require("./middlewares/logger.middleware");

const app = express();

// Request logging middleware
app.use(logger);

// Security headers
app.use(helmet());

// CORS configuration
app.use(cors({
    origin: config.clientUrl,
    credentials: true
}));

// Parse JSON request bodies
app.use(express.json({ limit: "10kb" }));

// Parse URL-encoded bodies
app.use(express.urlencoded({
    extended: true,
    limit: "10kb"
}));

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running"
    });
});

// API routes
app.use("/api/v1", routes);

// 404 handler
app.use(notFound);

// Centralized error handler
app.use(errorHandler);

module.exports = app;