import { Router } from "express";
import { validateCity } from "../middlewares/validateCity.middlewares.js";
import { citiesControllers } from "../controllers/cities.controllers.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateCity, citiesControllers.create);

export default citiesRouter;
