import { Router } from "express";
import { createUserController } from "../usecase/create-user";


const router = Router()

router.post('/users', (response, request)  => {

    return createUserController.handle(response, request)
})

export {router}