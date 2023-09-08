import httpStatus from "http-status";
import { citiesServices } from "../services/cities.services.js";

async function create(req, res) {
	const { name } = req.body;
	await citiesServices.create(name);
	return res.sendStatus(httpStatus.CREATED);
}

export const citiesControllers = { create };
