import { commonCodes } from "./common.js";

export const cartApiGetData = {
  200: {
    message: "Success",
    data: {
      cart: {
        key: "2c18fd39-b608-4dae-bc6d-e55e3a458220",
        total_quantity: 4,
        total_product_price: 356,
        total_product_price_with_discount: 356,
        shipping_cost: 150,
        discount: 0,
        is_pickup: 0,
        address_id: "f6d80bb1-b515-4830-8d06-2223fee5172d",
        total: 506,
        coupon: {},
        discounts: [],
        product_discount: 0,
        total_discount: 0,
        products: [
          {
            product_id: 109,
            uuid: "71c7d5e3-62a4-483a-8bc7-9de54310714e",
            name: "prod five",
            variation_name: "Carrier: Airtel number",
            slug: "prod-five",
            main_picture: "https://dev-admin.amarpet.com/product.webp",
            quantity: 4,
            price: 89,
            unit_price: 89,
            discount_amount: 0,
            offer_percent: 0,
            offer_price: 0,
            total: 356,
            variation: {
              name: "Carrier: Airtel number",
              sku: null,
              variation: "06ae9ecd-194b-417d-8cfc-89f743904407",
              inventory: 4,
              stock: 4,
            },
            inventory: 4,
          },
        ],
      },
    },
    errors: [],
  },
  ...commonCodes,
};

export const cartApiPostData = {
  200: {
    data: {
      cart: {
        key: "90c3ffa1-e4fd-4f6f-8c68-2927501c4f0d",
        total_quantity: 10,
        total_product_price: 1000,
        total_product_price_with_discount: 900,
        shipping_cost: 100,
        discount: 100,
        is_pickup: true,
        address_id: "b221b370-584a-4ccc-90f8-18138fa4029c",
        total: 1000,
        products: [
          {
            product_id: 68,
            uuid: "d7f56624-d359-47aa-a308-63ce8eb21c2a",
            name: "apple macbook 20",
            variation_name: "Ram: 8 GB, Storage: 128 GG",
            slug: "apple-macbook-16",
            main_picture:
              "https:\\/\\/amarpet-space.sgp1.digitaloceanspaces.com\\/development\\/854d6fae5ee42911677c739ee1734486\\/NClKzubVE5hthW3jNl2Vxa1tnSL1qZ-metaMjk4NTg1OTg2XzUyODQzMzE0OTgzNTI5MTJfMzEzNTc1Mzc1MTIxMjAyMTQ5X24ucG5n-.png",
            quantity: 1,
            price: 312,
            unit_price: 312,
            discount_amount: 1,
            offer_percent: 0,
            offer_price: 0,
            total: 312,
            inventory: 123,
            variation: {
              name: "Ram: 8 GB, Storage: 128 GG",
              sku: "sku",
              variation: "c3480034-6f30-41fa-ab5b-a948e5e895d9",
              inventory: 9,
              stock: 9,
            },
          },
        ],
      },
    },
    message: "Success",
    errors: [],
  },
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
  ...commonCodes,
};

export const cartDeliveryMethodPostData = {
  200: {
    message: "Success",
    data: [],
    errors: [],
  },
  ...commonCodes,
};
