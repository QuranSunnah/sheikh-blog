import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import registerAllRoutes from "./routes/registerRoutes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyCors, {
  origin: true,
  methods: "*",
});

registerAllRoutes(fastify);

const start = async () => {
  try {
    await fastify.listen({ host: "0.0.0.0", port: 4000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
