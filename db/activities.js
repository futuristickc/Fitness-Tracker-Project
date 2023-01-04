/* eslint-disable no-useless-catch */
const client = require('./client');

// database functions
async function createActivity({ name, description }) {
  // return the new activity
  try{
    const {rows: [activity]} = await client.query(`
    INSERT INTO activities(name, description)
    VALUES ($1,$2)
    RETURNING *
    `, [name, description])

    return activity;
  }catch(error){
    throw error;
  }
}

async function getAllActivities() {
  // select and return an array of all activities
  try{
    const {rows: activities} = await client.query(`
    SELECT *
    FROM activites
    `)

    return activities
  }catch(error){
    throw error;
  }
}

async function getActivityById(id) {

  try {
    const { rows: [activity]} = await client.query(`
    SELECT *
    FROM activities
    WHERE id=$1
    `, [id])

    return activity;
  } catch (error) {
    throw error;
  }
}

async function getActivityByName(name) {}

async function attachActivitiesToRoutines(routines) {
  // select and return an array of all activities
}

async function updateActivity({ id, name, description }) {
  // don't try to update the id
  // do update the name and description
  // return the updated activity
  try {
    const {rows: [activity]} = await client.query(`
      UPDATE activities
      SET name=$1, description=$2
      WHERE id=$3
      RETURNING *
    `, [name, description, id])

    return activity;
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
