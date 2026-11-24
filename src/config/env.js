require("dotenv").config();

const requiredEnv = [
    "MONGODB_URI",
    "JWT_SECRET"
];

for (const key of requiredEnv) {
    if (!process.env[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
}

module.exports = {
    port: Number(process.env.PORT) || 5000,
    nodeEnv: process.env.NODE_ENV || "development",
    mongoUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
    clientUrl: process.env.CLIENT_URL
};