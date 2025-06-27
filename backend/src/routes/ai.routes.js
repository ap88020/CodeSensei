import express from 'express';
import { response } from '../controllers/ai.controller.js';

const router = express.Router();

router.get("/get-response", response)

export default router;