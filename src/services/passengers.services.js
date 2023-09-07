import { passengerRepositories } from "../repositories/passengers.repositories.js";

async function create(passenger) {
	await passengerRepositories.create(passenger);
	return;
}

export const passengerServices = { create };
