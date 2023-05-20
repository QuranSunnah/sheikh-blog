import { commonAuthCodes, commonCodes } from "./common.js";

export const loginByEmailData = {
  200: {
    message: "Logged in successfully by email",
    errors: [],
    data: {
      user: {
        full_name: "John Doe",
        email_address: "abc@gmail.com",
        phone_number: "01700000000",
        registration_type: 1,
        cart_product_count: 1,
        wishlist_product_count: 1,
        gender: 1,
      },
      token: "string",
    },
  },
  ...commonAuthCodes,
};

export const loginByPhoneData = {
  200: {
    message: "We've sent a 6-digit one time PIN in your phone 01758845299",
    data: {
      new_customer: true,
      phone: "01758845299",
      signature:
        "63b9b1ac2abebcc7b8153839efeaa59bdc667f5ca7dffe8c3fa5f00dfe499a76.1673931911",
      otp: "123456",
    },
    errors: [],
  },
  ...commonAuthCodes,
};

export const registrationByMailData = {
  200: {
    message: "Successfully registered please verify your email",
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
  422: commonCodes[422],
  429: commonCodes[429],
};

export const registrationByPhoneData = {
  200: {
    message: "We've sent a 6-digit one time PIN in your phone 01758845299",
    data: {
      new_customer: true,
      phone: "01758845299",
      signature:
        "63b9b1ac2abebcc7b8153839efeaa59bdc667f5ca7dffe8c3fa5f00dfe499a76.1673931911",
      otp: "123456",
    },
    errors: [],
  },
  ...commonAuthCodes,
};

export const resetPasswordData = {
  200: {
    message: "Verified email and loggedin",
    data: {
      token: "5304|lNcJyvgaauZM7OOE3esVvmXIs0FmAfAtDq9epCZT",
      user: {
        full_name: "John Doe",
        email_address: "abc@gmail.com",
        phone_number: "01700000000",
        registration_type: 1,
        cart_product_count: 1,
        wishlist_product_count: 1,
        gender: 1,
      },
    },
    error: [],
  },
  ...commonAuthCodes,
};

export const signOutData = {
  200: {
    message: "Sign-out Successful",
    data: null,
    errors: null,
  },
  ...commonCodes,
  ...commonAuthCodes,
};
