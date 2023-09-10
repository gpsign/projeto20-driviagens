import { db } from "../database/database.connection.js";

function create(passenger) {
	return db.query(
		`INSERT INTO passengers (firstName, lastName) VALUES ($1, $2)`,
		[passenger.firstName, passenger.lastName]
	);
}

function read(params) {
	const { id, firstName, lastName, name } = params;
	let query = `SELECT id, firstName AS "firstName", lastName AS "lastName" FROM passengers`;

	const queryBuffer = [];
	const valuesBuffer = [];
	let cont = 1;

	if (id != undefined) {
		return db.query(`${query} WHERE id = $1;`, [id]);
	}
	if (name != undefined) {
		return db.query(`${query} WHERE firstName ILIKE $1 OR lastName ILIKE $1;`, [
			"%" + name + "%",
		]);
	}
	if (firstName != undefined) {
		queryBuffer.push(`firstName ILIKE $${cont}`);
		valuesBuffer.push("%" + firstName + "%");
		cont++;
	}
	if (lastName != undefined) {
		queryBuffer.push(`lastName ILIKE $${cont}`);
		valuesBuffer.push("%" + lastName + "%");
	}

	if (queryBuffer.length > 0) query += " WHERE " + queryBuffer.join("AND ");

	if (valuesBuffer.length > 0) return db.query(`${query};`, valuesBuffer);
	else return db.query(`${query};`);
}

function travels(name = undefined) {
	if (name != undefined)
		return db.query(
			`
			SELECT CONCAT(p.firstName, ' ', p.lastName) AS "passenger", COUNT(t.id) AS travels FROM travels t
			LEFT JOIN passengers p ON t.passengerId = p.id
			WHERE firstName ILIKE $1 OR lastName ILIKE $1
			GROUP BY passenger
			ORDER BY COUNT(p.id) DESC
			LIMIT 10;
		`,
			["%" + name + "%"]
		);
	else
		return db.query(
			`
		SELECT CONCAT(p.firstName, ' ', p.lastName) AS "passenger", COUNT(t.id) AS travels FROM travels t
		LEFT JOIN passengers p ON t.passengerId = p.id
		GROUP BY passenger
		ORDER BY COUNT(p.id) DESC
		LIMIT 10;
	`
		);
}

export const passengersRepositories = { create, read, travels };
