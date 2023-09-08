import { db } from "../database/database.connection.js";

function create(name) {
	return db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
}

function read(name) {
	return db.query(`SELECT * FROM cities WHERE name = $1;`, [name]);
}

export const citiesRepositories = { create, read };
