const authService = require("../services/authService");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {

    try {

        const user = await authService.registerUser(req.body);

        res.status(201).json({
            success: true,
            message: "Registration completed successfully",
            data: user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}

async function loginUser(req, res) {

    try {

        const { email, password } = req.body;

        const user = await authService.loginUser(email, password);

        if (!user) {

            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password"
            });

        }

        const token = jwt.sign(

            {
                id: user.id,
                email: user.email,
                role: user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1h"
            }

        );

       res.status(200).json({
    success: true,
    message: "Login Successful",
    data: {
        token,
        user
    }
});

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

}

module.exports = {

    registerUser,
    loginUser

};