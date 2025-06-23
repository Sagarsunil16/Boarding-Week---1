import { Router } from "express";
import { userController } from "../container/di.js";

const userRouter = Router()

userRouter.get('/welcome',userController.welcome.bind(userController))
userRouter.post('/user',userController.welcomeWithName.bind(userController))
userRouter.get('/error',userController.testError.bind(userController))
userRouter.get('/sum/:a/:b',userController.addition.bind(userController))
userRouter.get('/search',userController.searchQuery.bind(userController))
userRouter.post('/user/create',userController.createUser.bind(userController))
userRouter.get('/user/:id',userController.getUserById.bind(userController))
userRouter.delete('/user/:id',userController.deleteUserById.bind(userController))

export default userRouter