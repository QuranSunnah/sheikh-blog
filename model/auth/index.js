import Joi from "joi";

export const signInWithEmailSchema = Joi.object({
  email: Joi.string().required().messages({
    "string.empty": `"email" cannot be an empty field`,
  }),
  password: Joi.string().required().min(5).max(25).messages({
    "string.min": `"password" should have a minimum length of {#limit}`,
    "string.max": `"password" should have a max length of 25`,
    "string.empty": `"password" can not be empty`,
  }),
});

export const signUpWithEmailSchema = Joi.object({
  name: Joi.string().required().max(20).min(3),
  email: Joi.string().required(),
});
