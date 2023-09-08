import { citiesRepositories } from "../repositories/cities.repositories.js";

async function create(name) {
	const duplicate = await citiesRepositories.read(name);
	if (duplicate.rows[0])
		throw { type: "Data Conflict", message: "City already exists" };
	await citiesRepositories.create(name);
	return;
}

export const citiesServices = { create };
