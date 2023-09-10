import { passengersRepositories } from "../repositories/passengers.repositories.js";

async function create(passenger) {
	await passengersRepositories.create(passenger);
	return;
}

async function travels(name) {
	const travelsList = await passengersRepositories.travels(name);
	if (travelsList.rowCount > 10)
		throw {
			type: "Internal Server Error",
			message: "Too Many Results",
		};
	return travelsList;
}

export const passengersServices = { create, travels};
