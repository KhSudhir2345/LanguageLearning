import express from "express";
import find_Quiz from "../controllers/questionController.js";

const Router=express.Router();

Router.get('/',find_Quiz);

export default Router;