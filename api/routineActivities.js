const express = require('express');
const { getRoutineActivityById, updateRoutineActivity,getRoutineById, destroyRoutineActivity } = require('../db');
const router = express.Router();
const { requireUser } = require("./utils");


// PATCH /api/routine_activities/:routineActivityId
router.patch("./:routineActivityId", requireUser, async (req, res, next) => {
    const { duration, count } = req.body;
    const id = req.params.routineActivityId;

   try {
       const originalRoutineAct = await getRoutineActivityById(id);
        const routines = await getRoutineById(originalRoutineAct);

    if (!originalRoutineAct) {
        next({
          error: "error",
          name: "name",
          message: `RoutineActivityId ${id} not found`,
        });
      } else if (req.user && routines.creatorId != req.user.id) {
        next(
          res.status(403).send({
            error: "",
            name: "",
            message: `User ${req.user.username} is not allowed to update In the evening`,
          })
        );
      } else {
        const updatedRoutineActivity = await updateRoutineActivity({
          id,
          count,
          duration,
        });
        console.log("UPDATED ROUTINEATIVITY", updatedRoutineActivity);
        res.send(updatedRoutineActivity);
      }
    } catch (error) {
      next(error);
    }
  });
// DELETE /api/routine_activities/:routineActivityId
router.delete("/:routineActivityId", requireUser, async (req, res, next) => {
    const id = req.params.routineActivityId;
    try {
      const originalRoutineActivity = await getRoutineActivityById(id);
      const routines = await getRoutineById(originalRoutineActivity.routineId);
  
      if (!originalRoutineActivity) {
        next({
          error: "error",
          name: "name",
          message: `RoutineActivityId ${id} not found`,
        });
      } else if (req.user && routines.creatorId != req.user.id) {
        next(
          res.status(403).send({
            error: "",
            name: "",
            message: `User ${req.user.username} is not allowed to delete In the afternoon`,
          })
        );
      }
      const deletedRoutineActivity = await destroyRoutineActivity(id);
      //   console.log("this is deleted routineActivity", deletedRoutineActivity);
      res.send(deletedRoutineActivity);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
