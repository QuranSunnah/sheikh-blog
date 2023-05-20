import authenticate from "../middleware/authenticate.js";
import {
  userAddressDeleteData,
  userAddressPostData,
  userAllAddressGetData,
  userAllDistrictGetData,
  userAllDivisionGetData,
  userSingleAddressGetData,
  userSingleDistrictGetData,
  userSingleDivisionGetData,
} from "../mock-data/address.js";

async function addressesRoutes(fastify) {
  fastify.get("/v1/addresses", { preHandler: authenticate }, (_, reply) => {
    let code = 200;
    return reply.code(code).send(userAllAddressGetData[code]);
  });

  fastify.get("/v1/addresses/:id", { preHandler: authenticate }, (_, reply) => {
    let code = 200;
    return reply.code(code).send(userSingleAddressGetData[code]);
  });

  fastify.post("/v1/addresses", { preHandler: authenticate }, (_, reply) => {
    let code = 200;
    return reply.code(code).send(userAddressPostData[code]);
  });

  fastify.put("/v1/addresses/:id", { preHandler: authenticate }, (_, reply) => {
    let code = 200;
    return reply.code(code).send(userAddressPostData[code]);
  });

  fastify.put(
    "/v1/addresses-default/:id",
    { preHandler: authenticate },
    (_, reply) => {
      let code = 200;
      return reply.code(code).send(userAddressPostData[code]);
    }
  );

  fastify.delete(
    "/v1/addresses/:id",
    { preHandler: authenticate },
    (_, reply) => {
      let code = 204;
      return reply.code(code).send(userAddressDeleteData[code]);
    }
  );

  fastify.get("/v1/districts", { preHandler: authenticate }, (_, reply) => {
    let code = 200;
    return reply.code(code).send(userAllDistrictGetData[code]);
  });

  fastify.get("/v1/districts/:id", { preHandler: authenticate }, (_, reply) => {
    let code = 200;
    return reply.code(code).send(userSingleDistrictGetData[code]);
  });

  fastify.get("/v1/divisions", { preHandler: authenticate }, (_, reply) => {
    let code = 200;
    return reply.code(code).send(userAllDivisionGetData[code]);
  });

  fastify.get("/v1/divisions/:id", { preHandler: authenticate }, (_, reply) => {
    let code = 200;
    return reply.code(code).send(userSingleDivisionGetData[code]);
  });
}

export default addressesRoutes;
