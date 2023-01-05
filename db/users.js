const client = require("./client");

// database functions

// user functions
async function createUser({ username, password }) {
  try {
    const { rows: [newUser] } = await client.query(`
    INSERT INTO users(username, password)
    VALUES ($1, $2)
    ON CONFLICT (username) DO NOTHING
    RETURNING username
    `, [username, password])
    return newUser;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  try {
    const { rows: [user] } = await client.query(`
  SELECT username FROM users
  `,);
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userId) {
  try {
    const { rows: [user] } = await client.query(`
  SELECT id FROM users
  `,);
    // user.id = await getUser(username, password);
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(userName) {
  try {
    const { rows: [user] } = await client.query(`
SELECT * FROM users
WHERE username = $1
`, [userName]);
    return user;
  } catch (error) {

  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}

