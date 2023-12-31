import { db } from "../database/database.connection.js";
import dayjs from "dayjs";

function create(flight) {
	return db.query(
		`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
		[flight.origin, flight.destination, dayjs(flight.date, "DD-MM-YYYY")]
	);
}

function read(params) {
	const { id, origin, destination, biggerDate, smallerDate } = params;
	let query = `
			SELECT f.id, co.name AS "origin", cd.name AS "destination", TO_CHAR(f.date, 'DD-MM-YYYY') AS "date"
			FROM flights f 
			INNER JOIN cities co ON co.id = f.origin 
			INNER JOIN cities cd ON cd.id = f.destination
			`;

	const queryBuffer = [];
	const valuesBuffer = [];
	let cont = 1;

	if (id != undefined) {
		queryBuffer.push(`f.id = $${cont}`);
		valuesBuffer.push(id);
		cont++;
	}
	if (origin != undefined) {
		queryBuffer.push(`f.origin = $${cont}`);
		valuesBuffer.push(origin);
		cont++;
	}
	if (destination != undefined) {
		queryBuffer.push(`f.destination = $${cont}`);
		valuesBuffer.push(destination);
		cont++;
	}
	if (biggerDate != undefined) {
		queryBuffer.push(
			`f.date >= '${dayjs(smallerDate, "DD-MM-YYYY")}' AND f.date <= '${dayjs(
				biggerDate,
				"DD-MM-YYYY"
			)}'`
		);
	}

	if (queryBuffer.length > 0) query += " WHERE " + queryBuffer.join("AND ");

	if (valuesBuffer.length > 0)
		return db.query(`${query} ORDER BY f.date ASC;`, valuesBuffer);
	else return db.query(`${query} ORDER BY f.date ASC;`);
}

export const flightsRepositories = { create, read };
