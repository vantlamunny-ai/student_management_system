const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {

    try {

        const authHeader = req.headers.authorization;

        console.log("Authorization Header:", authHeader);

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Decoded Token:", decoded);

        req.user = decoded;

        next();

    } catch (error) {

        console.log(error);

        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });

    }
}

module.exports = verifyToken;