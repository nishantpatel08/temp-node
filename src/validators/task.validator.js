const { z } = require("zod");

const createTaskSchema = z.object({
    body: z.object({
        title: z.string().min(3).max(100),
        description: z.string().optional(),
        status: z.enum([
            "pending",
            "in-progress",
            "completed"
        ]).default("pending")
    })
});

module.exports = {
    createTaskSchema
};