import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
	const errorInfo = {
		Status: 500,
		Error: error.type,
		Description: error.message,
	};

	switch (error.type) {
		case "Invalid Request":
			errorInfo.Status = httpStatus.UNPROCESSABLE_ENTITY;
			break;

		case "Request Conflict":
			errorInfo.Status = httpStatus.CONFLICT;
			break;

		case "Not Found":
			errorInfo.Status = httpStatus.NOT_FOUND;
			break;

		case "Bad Request":
			errorInfo.Status = httpStatus.BAD_REQUEST;
			break;

		default:
			errorInfo.Status = httpStatus.INTERNAL_SERVER_ERROR;
			errorInfo.Error = "Internal Server Error";
	}

	console.log(errorInfo);
	return res.status(errorInfo.Status).send(errorInfo.Description);
}
