/* eslint-disable no-useless-catch */
const client = require("./client");
const bcrypt = require('bcrypt');

// database functions

// user functions
async function createUser({ username, password }) {
  const SALT_COUNT = 10;
const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
  try {
    const {rows: [user] } = await client.query(`
    INSERT INTO users(username, password)
    VALUES ($1, $2)
    ON CONFLICT (username) DO NOTHING
    RETURNING username;
    `, [username, password]);
    
    return user;
  } catch (error) {
    throw error
  }
}

async function getUser({ username, password }) {
//   const user = await getUserByUsername(username);
//   const passwordsMatch = await bcrypt.compare(password, user.password);

// if (passwordsMatch) {
// // return the user object (without the password)
// delete user.password;
// } else {
// throw 'SomeError';
// }

 try {
  const {rows:user} = await client.query(`
  SELECT id, username, password
  FROM users
  `)
return user;
 } catch (error) {
  console.log(error)
 }
}


async function getUserById(userId) {
try {
  const { rows: [user] } = await client.query(`
  SELECT id, username, name, location
  FROM user
  WHERE "id" = ${userId}
  `);

  delete user.password;
return user;
} catch (error) {
  throw error;
}
}

async function getUserByUsername(userName) {
  try {
    const {
      rows: [user] } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username=$1
    `,
      [userName]
    );

    return user;
  } catch (error) {
    throw error
}
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}
