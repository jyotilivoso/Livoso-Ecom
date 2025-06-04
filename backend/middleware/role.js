const UserModel = require('../models/UserModel');

const checkUserRole = async (_id, allowedRoles = []) => {
  const user = await UserModel.findOne({ _id: _id }).select('_id role');
  console.log("Checking user role for email:", _id);
  console.log("User found:", user);
  
  if (!user) throw new Error("User not found");
  if (!allowedRoles.includes(user.role)) {
    console.log(`User role '${user.role}' is not allowed. Required roles:`, allowedRoles);
    throw new Error("Access denied");
  }
  return user;
};

module.exports = checkUserRole;
