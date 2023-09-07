import httpStatus from "http-status";
import { passengerServices } from "../services/passengers.services.js";

async function create(req, res) {
	const passenger = req.body;
	await passengerServices.create(passenger);
	return res.sendStatus(httpStatus.CREATED);
}

export const passengerController = { create };
