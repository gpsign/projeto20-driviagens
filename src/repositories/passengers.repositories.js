import { db } from "../database/database.connection.js";

function create(passenger) {
	return db.query(
		`INSERT INTO passengers (firstName, lastName) VALUES ($1, $2)`,
		[passenger.firstName, passenger.lastName]
	);
}

export const passengersRepositories = { create };
