export const commonCodes = {
  401: {
    message: "Unauthenticated",
    data: [],
    errors: [
      {
        name: "auth",
        message: "Unauthenticated request",
      },
    ],
  },
  403: {
    message: "Unauthorized",
    data: [],
    errors: [
      {
        name: "auth",
        message: "Unauthorized request",
      },
    ],
  },
};

export const commonAuthCodes = {
  422: {
    message: "Unsupported",
    errors: [
      {
        name: "email",
        message: "Email not found",
      },
    ],
    data: [],
  },
  429: {
    message: "Too many attempts. Please try again in 60 seconds.",
    errors: [],
    data: [],
  },
};
