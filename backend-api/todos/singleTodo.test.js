import Joi from "joi";
import { singleTodoSchema } from "model/schema";
import { fetchAllTodos, fetchTodoById } from ".";

describe("testing singleTodo endpoint", () => {
  let apiResponse;

  beforeAll(async () => {
    const todos = await fetchAllTodos();
    apiResponse = await fetchTodoById(todos[0].id);
  });

  it("is response schema valid", () => {
    expect(Joi.assert(apiResponse, singleTodoSchema)).toBeUndefined();
  });
});
