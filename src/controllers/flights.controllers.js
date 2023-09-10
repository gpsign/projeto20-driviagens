import httpStatus from "http-status";
import { flightsServices } from "../services/flights.services.js";

async function create(req, res) {
	const flight = req.body;

	await flightsServices.create(flight);
	return res.sendStatus(httpStatus.CREATED);
}

async function read(req, res) {
	const params = req.query;

	const flightsList = await flightsServices.read(params);
	return res.status(httpStatus.OK).send(flightsList.rows);
}

export const flightsControllers = { create, read };
