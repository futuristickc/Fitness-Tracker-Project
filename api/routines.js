const express = require("express");
const {
  getAllPublicRoutines,
  createRoutine,
  getRoutineById,
  updateRoutine,
  destroyRoutine,
  getRoutineActivityById,
  addActivityToRoutine,
} = require("../db");
const router = express.Router();
const { requireUser } = require("./utils");

// GET /api/routines
router.get("/", async (req, res, next) => {
  try {
    const allRoutines = await getAllPublicRoutines();

    res.send(allRoutines);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// POST /api/routines
router.post("/", requireUser, async (req, res, next) => {
  const { name, goal, isPublic } = req.body;
  const routineData = {};
  try {
    routineData.name = name;
    routineData.goal = goal;
    routineData.isPublic = isPublic;
    routineData.creatorId = req.user.id;
    if(req.user) {
      req.body.creatorId = req.user.id;
    }
    const routine = await createRoutine(routineData);
    res.send(routine);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// PATCH /api/routines/:routineId
router.patch("/:routineId", requireUser, async (req, res, next) => {
  const { routineId } = req.params;
  const { name, goal, isPublic } = req.body;

  try {
    const id = req.params.routineId;
    const originalRoutine = await getRoutineById(routineId);
    if (originalRoutine.creatorId !== req.user.id) {
      next({
        message: `User ${req.user.username} is not allowed to update ${originalRoutine.name}`,
        name: "UnauthorizedUpdateError",
        error: "UpdateError",
      });
      res.status(403).send;
    } else {
      const updatedRoutine = await updateRoutine({
        id,
        name,
        goal,
        isPublic,
      });
      res.send(updatedRoutine);
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});



// DELETE /api/routines/:routineId
router.delete("/:routineId", requireUser, async (req, res, next) => {
  const id = req.params.routineId;
  try {
    const routineToDelete = await getRoutineById(id);
    // console.log("this is req.params.routineId", req.params.routineId);
    //  console.log("this is routineTODelete", routineToDelete);
    // const findRoutines = await getRoutineById(id);
    if (routineToDelete && routineToDelete.creatorId === req.user.id) {
      const deletedRoutine = await destroyRoutine(id);
      res.send(deletedRoutine);
    } else {
      next(
        res.status(403).send({
          error: "",
          message: `User ${req.user.username} is not allowed to delete On even days`,
          name: "",
        })
      );
    }
  } catch (error) {
    next(error);
  }
});

// POST /api/routines/:routineId/activities
router.post("/:routineId/activities", async (req, res, next) => {
  const { routineId } = req.params;
  const { activityId, count, duration } = req.body;
  const updatedActivityId = await getRoutineActivityById(activityId);
  try {
    if (updatedActivityId) {
      next({
        name: "issue found",
        message: `Activity ID ${activityId} already exists in Routine ID ${routineId}`,
      });
    } else {
      const updatedRoutine = await addActivityToRoutine({
        routineId,
        activityId,
        count,
        duration,
      });
      res.send(updatedRoutine);
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = router;
