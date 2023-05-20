import {
  cartApiGetData,
  cartApiPostData,
  cartDeliveryMethodPostData,
} from "../mock-data/cart.js";

const cartRoutes = async (fastify) => {
  fastify.get("/v1/carts", (req, reply) => {
    let code = 200;

    return reply.code(code).send(cartApiGetData[code]);
  });

  fastify.post("/v1/carts", (req, reply) => {
    let code = 200;

    return reply.code(code).send(cartApiPostData[code]);
  });

  fastify.delete("/v1/carts", (req, reply) => {
    let code = 200;

    return reply.code(code).send(cartApiPostData[code]);
  });

  fastify.delete("/v1/carts-delivery-method", (req, reply) => {
    let code = 200;

    return reply.code(code).send(cartDeliveryMethodPostData[code]);
  });
};

export default cartRoutes;
