import { db } from "../database/database.connection.js";

function create(travel) {
	return db.query(
		`INSERT INTO travels (passengerId, flightId) VALUES ($1, $2);`,
		[travel.passengerId, travel.flightId]
	);
}

function read(params) {
	const { id, passengerId, flightId } = params;
	let query = `SELECT * FROM travels`;

	const queryBuffer = [];
	const valuesBuffer = [];
	let cont = 1;

	if (id != undefined) {
		return db.query(`${query} WHERE id = $1;`, [id]);
	}
	if (passengerId != undefined) {
		queryBuffer.push(`passengerId = $${cont}`);
		valuesBuffer.push(passengerId);
		cont++;
	}
	if (flightId != undefined) {
		queryBuffer.push(`flightId = $${cont}`);
		valuesBuffer.push(flightId);
	}

	if (queryBuffer.length > 0) query += " WHERE " + queryBuffer.join("AND ");

	if (valuesBuffer.length > 0) return db.query(`${query};`, valuesBuffer);
	else return db.query(`${query};`);
}

export const travelsRepositories = { create, read };
