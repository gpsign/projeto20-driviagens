import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
	console.log(error);

	switch (error.type) {
		case "Invalid Request":
			return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

		case "Request Conflict":
			return res.status(httpStatus.CONFLICT).send(error.message);

		case "Not Found":
			return res.status(httpStatus.NOT_FOUND).send(error.message);
	}
}
