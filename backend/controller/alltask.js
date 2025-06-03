const taskModel = require("../models/taskModel");
async function allTaskController(req, res) {
    try {
        const tasks = await taskModel.find();
        if (!tasks || tasks.length === 0) {
            return res.status(404).json({
                message: "No tasks found",
                error: true,
                success: false
            });
        }
        res.status(200).json({
            data: tasks,
            error: false,
            success: true,
            message: "All tasks retrieved successfully"
        });
    } catch (err) {
        console.log("Error in allTaskController:", err);
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}

module.exports = allTaskController;