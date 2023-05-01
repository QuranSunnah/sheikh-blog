import Joi from "joi";
import { todosSchema } from "model/schema";
import { fetchAllTodos } from ".";

describe("testing todos-endpoint", () => {
  let apiResponse;

  beforeAll(async () => {
    apiResponse = await fetchAllTodos();
  });

  it("is response schema valid", () => {
    expect(Joi.assert(apiResponse, todosSchema)).toBeUndefined();
  });
});
