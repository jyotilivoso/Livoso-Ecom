const UserModel = require('../models/UserModel');

const checkUserRole = async (email, allowedRoles = []) => {
  const user = await UserModel.findOne({ email });
  console.log("Checking user role for email:", email);
  console.log("User found:", user);
  
  if (!user) throw new Error("User not found");
  if (!allowedRoles.includes(user.role)) {
    console.log(`User role '${user.role}' is not allowed. Required roles:`, allowedRoles);
    throw new Error("Access denied");
  }
  return user;
};

module.exports = checkUserRole;
