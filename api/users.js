/* eslint-disable no-useless-catch */
const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = process.env;
const { requireUser } = require("./utils");
const {
  createUser,
  getUserByUsername,
  getPublicRoutinesByUser,
  getAllRoutinesByUser,
} = require("../db");


usersRouter.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  console.log('this is username: ', username);
  console.log('this is password: ', password);

  try {
    const _user = await getUserByUsername(username);
    // console.log("this is underscore user", _user);
    if (_user) {
      res.send({
        error: "Error",
        message: `User ${_user.username} is already taken.`,
        name: "UsernameTaken",
      });
    }

    if (password.length < 8) {
      res.send({
        error: "Error",
        message: "Password Too Short!",
        name: "InsufficientPassword",
      });
    }

    // if (password.length >= 8) {
    const user = await createUser({
      username,
      password,
    });

    const token = jwt.sign(
      {
        id: user.id,
        username
      },
      JWT_SECRET,
      {
        expiresIn: "1W",
      }
    );
    console.log("this is user", user);
    res.send({
      message: "thank you for signing up",
      token: token,
      user: user,
    });
    // }
  } catch (error) {
    next(error);
  }
});


// POST /api/users/login
usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password",
    });
  }

  try {
    const user = await getUserByUsername(username);
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (passwordsMatch) {
      const token = jwt.sign(user, JWT_SECRET);
      res.send({ user, message: "you're logged in!", token: `${token}` });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    }
  } catch (error) {
    next(error);
  }
});

// GET /api/users/me
usersRouter.get("/me", requireUser, async (req,res, next ) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
})

// GET /api/users/:username/routines
usersRouter.get("/:username/routines", async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await getUserByUsername(username);
    if(!user){
      next({
        name: "No user found",
        message: "Cannot Find User",
      });
    }else if (req.user && req.user.id === user.id){
      const userRoutines = await getAllRoutinesByUser(user);
      res.send(userRoutines);
    } else {
      const publicRoutines = await getPublicRoutinesByUser(user);
      res.send(publicRoutines)
    }

  
  } catch ({name, message}) {
    next({name, message})
  }
})

module.exports = usersRouter;
