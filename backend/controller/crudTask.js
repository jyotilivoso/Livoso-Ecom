const checkUserRole = require('../middleware/role');
const Taskmodel = require('../models/taskModel');

exports.createTask = async (req, res) => {
  try {
    const { title, description, status,createdBy} = req.body;

    if (!title || !description || !status ||  !createdBy) {
      throw new Error("Missing required fields");
    }
// 🛡️ Role check
    const user = await checkUserRole(createdBy, ["ADMIN"]);

    const taskData = new Taskmodel({ title, description, status,createdBy });
    const saveData = await taskData.save();

    res.status(201).json({
      data: saveData,
      success: true,
      error: false,
      message: "Task created successfully"
    });

  } catch (err) {
    console.error("Error in createTask:", err);
    res.status(403).json({
      message: err.message || "Forbidden",
      success: false,
      error: true
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
      throw new Error("Missing required fields");
    }

    const taskData = await Taskmodel.findByIdAndUpdate(id, { title, description, status }, { new: true });

    if (!taskData) {
      return res.status(404).json({
        message: "Task not found",
        success: false,
        error: true
      });
    }

    res.status(200).json({
      data: taskData,
      success: true,
      error: false,
      message: "Task updated successfully"
    });

  } catch (err) {
    console.error("Error in updateTask:", err);
    res.status(403).json({
      message: err.message || "Forbidden",
      success: false,
      error: true
    });
  }
};

