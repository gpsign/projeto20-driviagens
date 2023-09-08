import httpStatus from "http-status";
import { passengersServices } from "../services/passengers.services.js";

async function create(req, res) {
	const passenger = req.body;
	await passengersServices.create(passenger);
	return res.sendStatus(httpStatus.CREATED);
}

export const passengersControllers = { create };
