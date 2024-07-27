import { Router } from "express";
import { getUserDocument, registerUser } from "../controllers/user.controllers.js";

const router = Router()

router.post("/register-user",registerUser)
router.post("/user-document",upload.fields(
    [
        {
            name : 'document',
            maxCount : 1
        }
    ]
),getUserDocument)
export default router