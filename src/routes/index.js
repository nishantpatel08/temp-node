const express = require("express");

const router = express.Router();

const taskRouter = require("./task.routes");

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Task Management API v1"
    });
});

router.use("/tasks", taskRouter);

module.exports = router;