import Joi from "joi";
import JoiDateFactory from "@joi/date";

const JoiDate = Joi.extend(JoiDateFactory);

export const flightsSchema = Joi.object({
	origin: Joi.number().required().min(1),
	destination: Joi.number().required().min(1),
	date: JoiDate.date().format('DD-MM-YYYY').required().greater("now"),
});
