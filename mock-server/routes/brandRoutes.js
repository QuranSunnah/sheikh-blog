import { allBrandGetData, singleBrandGetData } from "../mock-data/brand.js";

const brandRoutes = async (fastify) => {
  fastify.get("/v1/brands", (req, reply) => {
    let code = 200;

    return reply.code(code).send(allBrandGetData[0]);
  });

  fastify.get("/v1/brands/:id", (req, reply) => {
    let code = 200;

    return reply.code(code).send(singleBrandGetData[code]);
  });
};

export default brandRoutes;
