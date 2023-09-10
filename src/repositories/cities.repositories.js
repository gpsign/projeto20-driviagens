import { db } from "../database/database.connection.js";

function create(name) {
	return db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
}

function read(data) {
	if (typeof data === "number")
		return db.query(`SELECT * FROM cities WHERE id = $1;`, [data]);
	else
		return db.query(`SELECT * FROM cities WHERE LOWER(name) = LOWER($1);`, [
			data,
		]);
}

export const citiesRepositories = { create, read };
