import {
  allProductGetData,
  singleProductGetData,
} from "../mock-data/product.js";

const productRoutes = async (fastify) => {
  fastify.get("/v1/products", (res, reply) => {
    let code = 200;

    return reply.code(code).send(allProductGetData[code]);
  });

  fastify.get("/v1/products/:id", (res, reply) => {
    let code = 200;

    return reply.code(code).send(singleProductGetData[code]);
  });
};

export default productRoutes;
