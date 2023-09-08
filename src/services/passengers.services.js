import { passengersRepositories } from "../repositories/passengers.repositories.js";

async function create(passenger) {
	await passengersRepositories.create(passenger);
	return;
}

export const passengersServices = { create };
