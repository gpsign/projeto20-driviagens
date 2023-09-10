import JoiImport from "joi";
import JoiDateFactory from "@joi/date";

const Joi = JoiImport.extend(JoiDateFactory);

export const flightsSchema = Joi.object({
	origin: Joi.number().required().min(1),
	destination: Joi.number().required().min(1),
	date: Joi.date().format("DD-MM-YYYY").required(),
});
