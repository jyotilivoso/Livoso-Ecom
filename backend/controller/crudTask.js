const checkUserRole = require('../middleware/role');
const Taskmodel = require('../models/taskModel');

exports.createTask = async (req, res) => {
  try {
    const { title, description, status, email ,createdBy} = req.body;

    if (!title || !description || !status || !email || !createdBy) {
      throw new Error("Missing required fields");
    }

    // 🛡️ Role check
    const user = await checkUserRole(email, ["ADMIN"]);

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
