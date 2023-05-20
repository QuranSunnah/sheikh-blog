import { searchGetData } from "../mock-data/search.js";

const searchRoutes = async (fastify) => {
  fastify.get("/v1/search", (req, reply) => {
    let code = 200;

    return reply.code(code).send(searchGetData[code]);
  });
};

export default searchRoutes;
