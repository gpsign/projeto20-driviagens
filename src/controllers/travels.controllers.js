import httpStatus from "http-status";
import { travelsServices } from "../services/travels.services.js";

async function create(req, res) {
	const travel = req.body;
	await travelsServices.create(travel);
	return res.sendStatus(httpStatus.CREATED);
}

export const travelsControllers = { create };
