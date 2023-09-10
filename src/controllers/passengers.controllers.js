import httpStatus from "http-status";
import { passengersServices } from "../services/passengers.services.js";

async function create(req, res) {
	const passenger = req.body;
	await passengersServices.create(passenger);
	return res.sendStatus(httpStatus.CREATED);
}

async function travels(req, res) {
	const { name } = req.query;
	const travelsList = await passengersServices.travels(name);
	return res.status(httpStatus.OK).send(travelsList.rows);
}

export const passengersControllers = { create, travels };
