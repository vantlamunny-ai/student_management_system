function authorizeRoles(...allowedRoles) {

    return (req, res, next) => {

        const userRole = req.user.role;

        console.log("User Role:", userRole);
        console.log("Allowed Roles:", allowedRoles);

        if (!allowedRoles.includes(userRole)) {

            return res.status(403).json({
                success: false,
                message: "Access Denied"
            });

        }

        next();

    };

}

module.exports = authorizeRoles;