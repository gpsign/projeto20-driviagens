import { Router } from "express";
import { validatePassenger } from "../middlewares/validatePassenger.middlewares.js";
import { passengersControllers } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post(
	"/passengers",
	validatePassenger,
	passengersControllers.create
);
passengersRouter.get("/passengers/travels", passengersControllers.travels);

export default passengersRouter;
