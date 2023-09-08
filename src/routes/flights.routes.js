import { Router } from "express";
import { flightsControllers } from "../controllers/flights.controllers.js";
import { validateFlight } from "../middlewares/validateFlight.middlewares.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateFlight, flightsControllers.create);

export default flightsRouter;
