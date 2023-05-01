import Joi from "joi";

const singleTodoSchema = Joi.object({
  userId: Joi.number().integer().required(),
  id: Joi.number().integer().required(),
  title: Joi.string().required(),
  completed: Joi.boolean().required(),
});

export default singleTodoSchema;
