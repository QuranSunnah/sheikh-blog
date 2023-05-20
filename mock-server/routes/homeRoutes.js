import { homePageGetData } from "../mock-data/home.js";

const homeRoutes = async (fastify) => {
  fastify.get("/v1/landing-page-info", (req, replay) => {
    let code = 200;

    return replay.code(code).send(homePageGetData[code]);
  });
};

export default homeRoutes;
