import { citiesSchema } from "../schemas/cities.schemas.js";

export function validateCity(req, res, next) {
	const validation = citiesSchema.validate(req.body, {
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
