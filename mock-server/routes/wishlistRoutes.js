import { wishlistApiData } from "../mock-data/wishlist.js";

const wishlistRoutes = async (fastify) => {
  fastify.get("/v1/wishlist", (req, reply) => {
    let code = 200;

    return reply.code(code).send(wishlistApiData[code]);
  });

  fastify.post("/v1/wishlist", (req, reply) => {
    let code = 200;

    return reply.code(code).send(wishlistApiData[code]);
  });

  fastify.delete("/v1/wishlist", (req, reply) => {
    let code = 200;

    return reply.code(code).send(wishlistApiData[code]);
  });
};

export default wishlistRoutes;
