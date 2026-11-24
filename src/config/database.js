const mongoose = require("mongoose");
const config = require("./env");

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
};

module.exports = connectDB;