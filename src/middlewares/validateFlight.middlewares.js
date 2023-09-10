import { flightsSchema } from "../schemas/flights.schema.js";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import JoiImport from "joi";
import JoiDateFactory from "@joi/date";

const Joi = JoiImport.extend(JoiDateFactory);

const dayjsExtended = dayjs.extend(customParseFormat);

export function validateFlight(req, res, next) {
	const validation = flightsSchema.validate(req.body, {
		abortEarly: false,
	});

	console.log(dayjsExtended(req.body.date, "DD-MM-YYYY", true).isValid());

	if (validation.error) {
		const error = {
			type: "Invalid Request.",
			message: validation.error.details
				.map((detail) => detail.message)
				.join(", "),
		};
		throw error;
	}

	if (!dayjsExtended(req.body.date, "DD-MM-YYYY", true).isValid())
	throw {
		type: "Invalid Request",
		message: "Dates must be in DD-MM-YYYY format.",
	};

	next();
}
