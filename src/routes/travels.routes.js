import { Router } from "express";
import { travelsControllers } from "../controllers/travels.controllers.js";
import { validateTravel } from "../middlewares/validateTravel.middlewares.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateTravel, travelsControllers.create);

export default travelsRouter;
