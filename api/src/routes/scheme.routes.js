import { Router } from "express";
import { matchSchemes } from "../controllers/scheme.controllers.js";

const router = Router()

router.get("/find-schemes",matchSchemes)

export default router