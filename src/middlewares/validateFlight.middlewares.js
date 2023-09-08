import { flightsSchema } from "../schemas/flights.schema.js";

export function validateFlight(req, res, next) {
	const validation = flightsSchema.validate(req.body, {
		abortEarly: false,
	});

	if (validation.error) {
		const error = {
			type: "Invalid Request.",
			message: validation.error.details
				.map((detail) => detail.message)
				.join(", "),
		};
		throw error;
	}

	next();
}
