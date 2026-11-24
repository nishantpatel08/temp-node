const app = require("./app");
const connectDB = require("./config/database");
const config = require("./config/env");

const startServer = async () => {
    try {
        // Connect database first
        await connectDB();

        // Start server only after DB connection
        const server = app.listen(config.port, () => {
            console.log(
                `Server running on port ${config.port}`
            );
        });

        // Graceful shutdown
        const shutdown = (signal) => {
            console.log(`${signal} received. Closing server...`);

            server.close(async () => {
                console.log("HTTP server closed");

                const mongoose = require("mongoose");
                await mongoose.disconnect();

                process.exit(0);
            });
        };

        process.on("SIGTERM", () => shutdown("SIGTERM"));
        process.on("SIGINT", () => shutdown("SIGINT"));

    } catch (error) {
        console.error("Application startup failed:", error);
        process.exit(1);
    }
};

startServer();