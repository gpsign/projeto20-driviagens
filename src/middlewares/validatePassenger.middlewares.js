import { passengerSchema } from "../schemas/passengers.schemas.js";

export function validatePassenger(req, res, next) {
	const validation = passengerSchema.validate(req.body, {
		abortEarly: false,
	});

	if (validation.error) {
		const error = {
			type: "Invalid Request",
			message: validation.error.details
				.map((detail) => detail.message)
				.join(", "),
		};
		throw error;
	}

	next();
}
