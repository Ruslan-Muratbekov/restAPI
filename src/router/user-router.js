import Router from "express";
import userController from "../controller/user-controller.js";

const userRouter = new Router()

userRouter.get('/user', userController.getAll)
userRouter.get('/user/:id', userController.getUser)
userRouter.post('/user', userController.createUser)
userRouter.put('/user', userController.updateUser)
userRouter.delete('/user/:id', userController.deleteUser)

export default userRouter