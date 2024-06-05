import { Router } from "express";
import { listusers, register } from "../controllers/authControllers";

const router = Router()

router.post('/register', register)
router.get('/user', listusers)

export default router