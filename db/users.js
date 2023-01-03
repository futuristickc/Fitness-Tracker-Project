const client = require("./client");

// database functions

// user functions
async function createUser({ username, password }) {
  try {
    const result = await client.query(`
    INSERT INTO users(username, password)
    ON CONFLICT (username) DO NOTHING
    RETURNING *;
    `, [username, password] );

    return result;
  }catch (error) {
    throw error
  }
}

async function getUser({ username, password }) {

}

async function getUserById(userId) {

}

async function getUserByUsername(userName) {

}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}
