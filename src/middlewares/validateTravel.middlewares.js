import { travelsSchema } from "../schemas/travels.schemas.js";

export function validateTravel(req, res, next) {
	const validation = travelsSchema.validate(req.body, {
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
