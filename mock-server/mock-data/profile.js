import { commonCodes } from "./common.js";

export const userProfileGetData = {
  200: {
    message: "Success",
    data: {
      customer: {
        full_name: "shah poran",
        email_address: "shah.poran@appnap.io",
        phone_number: "01512598624",
        gender: 1,
        registration_type: 1,
        cart_product_count: 1,
        wishlist_product_count: 0,
      },
    },
    errors: [],
  },
  401: commonCodes[401],
};

export const userProfilePostData = {
  202: {
    message: "Success",
    data: {
      customer: {
        full_name: "John Doe",
        email_address: "abc@gmail.com",
        phone_number: "01700000000",
        registration_type: 1,
        cart_product_count: 1,
        wishlist_product_count: 1,
        gender: 1,
      },
    },
    errors: [],
  },
  422: {
    message: "Unprocessable Content",
    data: [],
    errors: [
      {
        name: "full_name",
        message: "The full name field is required.",
      },
    ],
  },
  ...commonCodes,
};
