import { commonCodes } from "../mock-data/common.js";

const authenticate = async (request, reply, done) => {
  let code = 401;

  const token = request.headers.authorization;
  if (token) {
    done();
  } else {
    reply.code(code).send(commonCodes[code]);
  }
};

export default authenticate;
