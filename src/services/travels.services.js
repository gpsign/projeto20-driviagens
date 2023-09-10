import { travelsRepositories } from "../repositories/travels.repositories.js";
import { passengersRepositories } from "../repositories/passengers.repositories.js";
import { flightsRepositories } from "../repositories/flights.repositories.js";

async function create(travel) {
	const passenger = await passengersRepositories.read({
		id: travel.passengerId,
	});
	if (!passenger.rows[0])
		throw { type: "Not Found", message: "Passenger not found." };

	const flight = await flightsRepositories.read({ id: travel.flightId });
	if (!flight.rows[0])
		throw { type: "Not Found", message: "Flight not found." };

	await travelsRepositories.create(travel);
	return;
}

export const travelsServices = { create };
