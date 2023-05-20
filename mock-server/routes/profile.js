import { userProfilePostData } from "../mock-data/profile.js";

async function profileRoutes(fastify) {
  fastify.get(`/v1/profile`, {}, (request, reply) => {
    let code = 200;

    return reply.code(code).send(userProfileGetData[code]);
  });

  fastify.post("/v1/profile", (request, reply) => {
    let code = 202;

    return reply.code(code).send(userProfilePostData[code]);
  });
}

export default profileRoutes;
