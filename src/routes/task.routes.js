const express = require("express");
const router = express.Router();


const validate = require("../middlewares/validate.middleware");
const { createTaskSchema } = require("../validators/task.validator");
const authenticate = require("../middlewares/auth.middleware");



router.use(authenticate);

router.get("/", (req, res) => {
    res.json({
        message: "All tasks",
        user: req.user
    });
});

// // Middleware usage example for a specific route
// const authenticate = require("../middlewares/auth.middleware");
// const authorize = require("../middlewares/authorize.middleware");

// router.delete(
//     "/:id",
//     authenticate,
//     authorize("admin"),
//     deleteTask
// );


const createTask = async (req, res) => {
    const taskData = req.validated.body;

    res.status(201).json({
        success: true,
        data: taskData
    });
};

router.post(
    "/",
    authenticate,
    validate(createTaskSchema),
    createTask
);

module.exports = router;