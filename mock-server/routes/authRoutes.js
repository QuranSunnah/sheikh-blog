import {
  loginByEmailData,
  loginByPhoneData,
  registrationByMailData,
  registrationByPhoneData,
  resetPasswordData,
  signOutData,
} from "../mock-data/authData.js";

const authRoutes = async (fastify) => {
  fastify.post("/v1/login", (res, reply) => {
    let code = 200;

    return reply.code(code).send(loginByEmailData[code]);
  });

  fastify.post("/v1/login/phone", (res, reply) => {
    let code = 200;

    return reply.code(code).send(loginByPhoneData[code]);
  });

  fastify.post("/v1/registration", (res, reply) => {
    let code = 200;

    return reply.code(code).send(registrationByMailData[code]);
  });

  fastify.post("/v1/registration/phone", (res, reply) => {
    let code = 200;

    return reply.code(code).send(registrationByPhoneData[code]);
  });

  fastify.post("/v1/reset-password/email", (res, reply) => {
    let code = 200;

    return reply.code(code).send(resetPasswordData[code]);
  });

  fastify.post("/v1/sign-out", (res, reply) => {
    let code = 200;

    return reply.code(code).send(signOutData[code]);
  });
};

export default authRoutes;
