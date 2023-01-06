const express = require('express');
const { getAllRoutines, createRoutine } = require('../db/routines');
const router = express.Router();

// GET /api/routines
// router.get('/', async (req, res, next) => {
//     try {
//         const routines = await getAllRoutines();
//         res.send(routines);
//     } catch (error) {
//         next(error);
//     }
// });
// POST /api/routines
// router.post('/', requireUser, async (req, res, next) => {
//     try {
//         console.log(req.body);
//         const { routines } = req.body;

//         const newRoutine = await createRoutine({ routines });

//         res.send(newRoutine);
//     } catch (error) {
//         next(error);
//     }
// });
// PATCH /api/routines/:routineId

// DELETE /api/routines/:routineId

// POST /api/routines/:routineId/activities

module.exports = router;
