import { db } from "../database/database.connection.js";

function create(travel) {
	return db.query(
		`INSERT INTO travels (passengerId, flightId) VALUES ($1, $2);`,
		[travel.passengerId, travel.flightId]
	);
}

export const travelsRepositories = { create };
