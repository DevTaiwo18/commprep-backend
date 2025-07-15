import express from "express";
import {
    createSession,
    getSessions,
    getSession,
    updateSession,
    deleteSession,
} from "../controllers/sessionController.js";
import authMiddleware from "../middleware/authMiddleware.js"; 

const router = express.Router();

router.post("/", authMiddleware, createSession);
router.get("/", authMiddleware, getSessions);
router.get("/:id", authMiddleware, getSession);
router.put("/:id", authMiddleware, updateSession);
router.delete("/:id", authMiddleware, deleteSession);

export default router;
