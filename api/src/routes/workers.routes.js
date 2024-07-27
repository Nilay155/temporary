import { Router } from "express";
import { createWorker, loginWorker, logoutWorker } from "../controllers/worker.controllers.js";

const router = Router()

router.post("/register-worker",createWorker)
router.post("/login-worker",loginWorker)
router.get("/logout-worker",logoutWorker)

export default router