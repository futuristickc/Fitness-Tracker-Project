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
  const routinesToReturn = [...routines];
  try {
    const { rows: activities } = await client.query(`
  SELECT activities.*, routine_activities.id AS "routineActivityId", routine_activities."routineId", 
  routine_activities.duration, routine_activities.count
  FROM activities
  JOIN routine_activities ON routine_activities."activityId" = activities.id;
  `);

    for (const routine of routinesToReturn) {
      const activitiesToAdd = activities.filter(
        (activity) => activity.routineId === routine.id
      );

      routine.activities = activitiesToAdd;
    }
    return routinesToReturn;
  } catch (error) {
    console.error("error attaching", error);
    throw error;
  }
}

async function updateActivity({ id, ...fields }) {
  // don't try to update the id
  // do update the name and description
  // return the updated activity
  // const keys = Object.keys(fields);
  // const setString = keys.map(
  //   (key, index) => `"${key}"=$${index + 1}`)
  //   .join(', ');

  // if (setString.length === 0) {
  //   return;
  // }

  try {
    if (fields.name)
      await client.query(`UPDATE activities
       SET name = '${fields.name}'
        WHERE id = ${id}
        `);

    if (fields.description)
      await client.query(`UPDATE activities
       SET description = '${fields.description}'
        WHERE id = ${id}
        `);

    const activity = await getActivityById(id);

    // console.log(activity);

    return activity;
  }
  catch (error) {
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

