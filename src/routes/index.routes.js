import { Router } from "express";
import passengersRouter from "./passengers.routes.js";
import errorHandler from "../middlewares/errorHandler.middlewares.js";
import citiesRouter from "./cities.routes.js";

const router = Router();

router.use(passengersRouter);
router.use(citiesRouter);
router.use(errorHandler);

export default router;
