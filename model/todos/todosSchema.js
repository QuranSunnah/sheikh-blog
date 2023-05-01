import Joi from "joi";
import singleTodoSchema from "./singleTodoSchema";

const todosSchema = Joi.array().items(singleTodoSchema);

export default todosSchema;
