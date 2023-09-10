import { db } from "../database/database.connection.js";

function create(passenger) {
	return db.query(
		`INSERT INTO passengers (firstName, lastName) VALUES ($1, $2)`,
		[passenger.firstName, passenger.lastName]
	);
}

function read(params) {
	const { id, firstName, lastName } = params;
	let query = `SELECT id, firstName AS "firstName", lastName AS "lastName" FROM passengers`;

	const queryBuffer = [];
	const valuesBuffer = [];
	let cont = 1;

	if (id != undefined) {
		return db.query(`${query} WHERE id = $1;`, [id]);
	}
	if (firstName != undefined) {
		queryBuffer.push(`LOWER(firstName) = LOWER($${cont})`);
		valuesBuffer.push(firstName);
		cont++;
	}
	if (lastName != undefined) {
		queryBuffer.push(`LOWER(lastName) = $${cont}`);
		valuesBuffer.push(lastName);
	}

	if (queryBuffer.length > 0) query += " WHERE " + queryBuffer.join("AND ");

	if (valuesBuffer.length > 0) return db.query(`${query};`, valuesBuffer);
	else return db.query(`${query};`);
}

export const passengersRepositories = { create, read };
