import { Router } from "express";
import { validatePassenger } from "../middlewares/validatePassenger.middlewares.js";
import { passengerController } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validatePassenger, passengerController.create);

export default passengersRouter;