import { categoryGetData } from "../mock-data/category.js";

const categoryRoutes = async (fastify) => {
  fastify.get("/v1/categories/:id", (res, reply) => {
    let code = 200;

    return reply.code(code).send(categoryGetData[code]);
  });
};

export default categoryRoutes;
