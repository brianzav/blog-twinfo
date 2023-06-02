import {CreateUserController} from './controllers/user/CreateUserController';
import { Router, Request, Response } from 'express';
import { AuthUserController } from "./controllers/user/AuthUserController";
const router = Router();

//Rotas USER ------------
router.post('/blog/userinsert',new CreateUserController().handle);

router.post('/blog/login',new AuthUserController().handle);

export { router };