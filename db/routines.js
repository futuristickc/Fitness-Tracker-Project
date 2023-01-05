/* eslint-disable no-useless-catch */
const client = require("./client");

async function createRoutine({ creatorId, isPublic, name, goal }) {
  try {
    const { rows: [newRoutine] } = await client.query(`
    INSERT INTO routines ("creatorId", "isPublic", name, goal)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [creatorId, isPublic, name, goal]);
    return newRoutine;
  } catch (error) {
    throw error;
  }
}

async function getRoutineById(id) {
  try {
    const { rows: [routine] } = await client.query(`
    SELECT routines.*, username AS "creatorName"
    FROM routines
    JOIN users ON users.id=routines."creatorId"
    WHERE routines.id=$1
    `, [id])

    const { rows: activities } = await client.query(`
    SELECT activities.*, count, duration, routine_activities.id as "routineActivityId"
    FROM activities
    JOIN routine_activities ON activities.id=routine_activites."activityId"
    WHERE routine_activities."routineId"=$1;
    `, [id])
    routine.activities = activities
    return routine;
  } catch (error) {
    throw error;
  }
}

async function getRoutinesWithoutActivities() {
  try {
    const { rows } = await client.query(`
  SELECT * FROM routines`);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllRoutines() {
  try {
    const { rows: routines } = await client.query(`
    SELECT * FROM routines
    `);

    const { rows: activites } = await client.query(`
    SELECT * FROM activities
    JOIN routine_activities on routine_activities."activityId" = activities.id
    `)

    // console.log('these are my activities:::::: ', activites);
    for (const routine of routines) {
      const activitiesToAdd = activites.filter((activity) => activity.routineid === routine.id)
      routine.activities = activitiesToAdd
    }

    console.log('my routines:::::: ', routines);
    return routines;
  } catch (error) {
    throw error;
  }
}

async function getAllPublicRoutines() { }

async function getAllRoutinesByUser({ username }) { }

async function getPublicRoutinesByUser({ username }) { }

async function getPublicRoutinesByActivity({ id }) { }

async function updateRoutine({ id, ...fields }) { }

async function destroyRoutine(id) { }

module.exports = {
  getRoutineById,
  getRoutinesWithoutActivities,
  getAllRoutines,
  getAllPublicRoutines,
  getAllRoutinesByUser,
  getPublicRoutinesByUser,
  getPublicRoutinesByActivity,
  createRoutine,
  updateRoutine,
  destroyRoutine,
};

