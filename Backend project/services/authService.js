const db = require("../config/db");

async function registerUser(userData) {

    const { name, email, password, role } = userData;

    const checkQuery = "SELECT * FROM users WHERE email = ?";

    const [existingUser] = await db.query(checkQuery, [email]);

    if (existingUser.length > 0) {
        throw new Error("Email already exists");
    }

    const query = `
    INSERT INTO users(name,email,password,role)
    VALUES(?,?,?,?)`;

    const [result] = await db.query(query, [
        name,
        email,
        password,
        role
    ]);

    return {
        id: result.insertId,
        name,
        email,
        role
    };
}

async function loginUser(email, password) {

    const query = `
    SELECT * FROM users
    WHERE email=? AND password=?`;

    const [rows] = await db.query(query, [email, password]);

    return rows[0];
}

module.exports = {
    registerUser,
    loginUser
};