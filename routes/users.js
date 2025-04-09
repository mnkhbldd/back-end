import express from "express"
import { createUser, deleteUser, getUserById, getUsers, userUpdate } from "../controllers/users.js"

export const userRouter = express.Router()

userRouter
.get("/", getUsers )
.get("/:id", getUserById)
.post("/", createUser)
.put("/", userUpdate)
.delete("/", deleteUser)

// .get("/users", getUsers )
// .get("/user/:id", getUserById)
// .post("/user/create", createUser)
// .put("/user/update", userUpdate)
// .delete("user/delete", deleteUser)

