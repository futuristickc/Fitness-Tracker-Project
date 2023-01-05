/* eslint-disable no-useless-catch */
const client = require('./client');

// database functions
async function createActivity({ name, description }) {
  // return the new activity
  try {
    const { rows: [newActivity] } = await client.query(`
    INSERT INTO activities (name, description)
    VALUES ($1, $2)
    RETURNING *
    `, [name, description])
    return newActivity;
  } catch (error) {
    throw error;
  }
}

async function getAllActivities() {
  // select and return an array of all activities
  const { rows: activites } = await client.query(`
SELECT * FROM activities;
`)
  return activites;
}

async function getActivityById(id) {
  const { rows: [activites] } = await client.query(`
  SELECT * FROM activities
  WHERE id = $1
  `, [id]);
  return activites;
}

async function getActivityByName(name) {
  const { rows: [activites] } = await client.query(`
  SELECT * FROM activities
  WHERE name = $1
  `, [name]);
  return activites;
}

async function attachActivitiesToRoutines(routines) {
  // select and return an array of all activities
}

async function updateActivity({ id, ...fields }) {
  // don't try to update the id
  // do update the name and description
  // return the updated activity
  const keys = Object.keys(fields);
  const setString = keys.map(
    (key, index) => `"${key}"=$${index + 1}`)
    .join(', ');

  if (setString.length === 0) {
    return;
  }

  try {
    const { rows: [newActivity] } = await client.query(`
    UPDATE name, description 
    SET ${setString}
    WHERE username, password = $1, $2
    RETURNING *
    `, Object.values(fields));
    return newActivity;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllActivities,
  getActivityById,
  getActivityByName,
  attachActivitiesToRoutines,
  createActivity,
  updateActivity,
};

