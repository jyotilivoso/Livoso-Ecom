const UserModel=require('../../models/UserModel')
const bcrypt = require('bcrypt');
async function userSignUpController(req, res) {
    try {
        const { name, email, password } = req.body
        // console.log(req.body)
        if (!email) {
            throw new Error("please provide the email")
        }
        if (!password) {
            throw new Error("please provide the passwordd")
        }
        if (!name) {
            throw new Error("please provide the name")
        }
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error(" something is error that password is not valid")
        }
        
        const existingUser = await UserModel.findOne({ email });
        console.log("existingUser", existingUser)
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email.",
                error: true,
                success: false
            });
        }

        const payload = {
            ...req.body,
            role:"GENERAL",
            password: hashPassword
        }
        
        const userData = new UserModel(payload)
        const saveData = await userData.save()

        res.status(201).json({
            data: saveData,
            success: true,
            error: false,
            message: "user create successfulll"
        })
    }
    catch (err) {
        console.log("error in user signup controller", err)
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }

}

module.exports = userSignUpController