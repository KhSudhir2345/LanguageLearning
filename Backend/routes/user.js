import express from "express";
import mongoose from "mongoose";

import { loginUser,signupUser } from "../controllers/userController.js";
// const { loginUser,signupUser } = require('../controllers/userController');

const router=express.Router();

router.post('/login',loginUser);

router.post('/signup',signupUser);

export default router