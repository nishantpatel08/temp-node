const logger = (req, res, next) => {
    console.log({
        method: req.method,
        url: req.originalUrl,
        timestamp: new Date().toISOString()
    });

    next();
};

module.exports = logger;