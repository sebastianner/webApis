import Joi, { Schema, StringSchema } from "joi";

const username: StringSchema = Joi.string().alphanum().min(5).max(30);
const email: StringSchema = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ["com", "net", "es"] },
});
const password: StringSchema = Joi.string()
  .alphanum()
  .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"));

//--objects--

const loginAuthSchema: Schema = Joi.object({
  username: username,
  email: email,
  password: password.required(),
});

export default { loginAuthSchema };
