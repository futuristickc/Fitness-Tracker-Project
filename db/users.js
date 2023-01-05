/* eslint-disable no-useless-catch */
const id = require("faker/lib/locales/id_ID");
const client = require("./client");

// database functions

// user functions
async function createUser({ username, password }) {
  try {
    const { rows: [user] } = await client.query(`
    INSERT INTO users(username, password)
    VALUES ($1, $2)
    ON CONFLICT (username) DO NOTHING
    RETURNING *;
    `, [username, password]);

    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  if (!username || !password){
    return;
  }
  try {
    const user = await getUserByUsername(username);
    
    if (password == user.password) {
  //     const { rows: [user] } = await client.query(`
  // SELECT username, id
  // FROM users
  // WHERE username= $1 AND password = $2
  // `, [username, password])
  delete user.password;
      return user;
    }
  } catch (error) {
    throw error;
  }
}



async function getUserById(userId) {
  try {
    const { rows: [user], } = await client.query(`
  SELECT username, id
  FROM users
  WHERE id = ${userId};
  `,);
    // user.id = await getUser(username, password);
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(userName) {
  try {
    const { rows: [user], } = await client.query(`
SELECT * FROM users
WHERE username = $1
`, [userName]);
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}

