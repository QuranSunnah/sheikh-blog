import { newsletterApiData } from "../mock-data/newsletter.js";

const newsletterRoutes = async (fastify) => {
  fastify.post("/v1/newsletter-subscription", (req, reply) => {
    let code = 200;

    return reply.code(code).send(newsletterApiData[code]);
  });
};

export default newsletterRoutes;
