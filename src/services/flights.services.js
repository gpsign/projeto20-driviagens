import { flightsRepositories } from "../repositories/flights.repositories.js";
import { citiesRepositories } from "../repositories/cities.repositories.js";
import dayjs from "dayjs";

async function create(flight) {
	const { origin, destination, date } = flight;

	if (origin === destination)
		throw {
			type: "Request Conflict",
			message: "Origin and destination cannot be the same.",
		};

	const originCity = await citiesRepositories.read(origin);
	const destinationCity = await citiesRepositories.read(destination);

	if (!originCity.rows[0] || !destinationCity.rows[0]) {
		const error = {
			type: "Not Found",
			message: "",
		};
		if (!originCity.rows[0]) error.message += "Origin does not exist. ";
		if (!destinationCity.rows[0])
			error.message += "Destination does not exist. ";

		throw error;
	}

	if (dayjs(date).isBefore(dayjs())) {
		throw { type: "Invalid Request", message: "Expired date." };
	}

	await flightsRepositories.create(flight);
	return;
}

async function read(flight) {
	const flightsList = await flightsRepositories.read(flight);
	return flightsList;
}

export const flightsServices = { create, read };
