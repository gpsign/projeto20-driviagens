import { Router } from "express";
import passengersRouter from "./passengers.routes.js";
import errorHandler from "../middlewares/errorHandler.middlewares.js";

const router = Router();

router.use(passengersRouter);
router.use(errorHandler);

export default router;
