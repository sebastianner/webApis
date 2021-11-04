import Joi, { Schema, StringSchema } from "joi";

const id: StringSchema = Joi.string().uuid();
const name: StringSchema = Joi.string().min(5).max(30);
const username: StringSchema = Joi.string().alphanum().min(5).max(30);
const email: StringSchema = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ["com", "net", "es"] },
});
const password: StringSchema = Joi.string()
  .alphanum()
  .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"));

//--objects--

const createUserSchema: Schema = Joi.object({
  name: name.required(),
  username: username.required(),
  email: email.required(),
  password: password.required(),
});

const updateUserSchema: Schema = Joi.object({
  name: name,
  username: username,
  email: email,
  password: password,
});

const getUserSchema: Schema = Joi.object({
  id: id.required(),
});

export default { createUserSchema, updateUserSchema, getUserSchema };
