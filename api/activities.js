const express = require('express');
const router = express.Router();
const { requireUser } = require("./utils");
const {  getAllActivities, getActivityById, getActivityByName, attachActivitiesToRoutines, createActivity, updateActivity, } = require("../db");

// GET /api/activities/:activityId/routines
router.get("./activityId/routines", async (req, res, next) => {
   const { actvitiyId } = req.params;
    try {
        const activites = await getActivityById({id: actvitiyId});
        if(!activites){
            next({
                name: " No Activity Found",
                Message: "Activity ${activityId} invalid "
            })
        }
    
        // let u 
        // req.user ? userId = req.user.id:null
    
    
        //   const posts = allPosts.filter(post => {
        //     return post.active || (req.user && post.author.id === req.user.id);
        //   });
       
        res.send({
          activites
        });
      } catch ({ name, message }) {
        next({ name, message });
      }
})

// GET /api/activities

// POST /api/activities

// PATCH /api/activities/:activityId

module.exports = router;
