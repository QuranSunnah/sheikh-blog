import { mainMenuGetData } from "../mock-data/mainMenu.js";

const mainMenuRoutes = async (fastify) => {
  fastify.get("/v1/main-menus", (req, replay) => {
    let code = 200;

    return replay.code(code).send(mainMenuGetData[code]);
  });
};

export default mainMenuRoutes;
