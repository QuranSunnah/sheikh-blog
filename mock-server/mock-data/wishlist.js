import { commonCodes } from "./common.js";

export const wishlistApiData = {
  200: {
    message: "Success",
    data: {
      wishlist: [
        {
          inventory: 0,
          uuid: "756549dd-259f-44a0-af4c-6d54b3b42814",
          product_id: 139,
          name: "20",
          variation_name: "Carrier: Airtel number",
          slug: "20",
          main_picture:
            "https://amarpet-space.sgp1.digitaloceanspaces.com/development/142949df56ea8ae0be8b5306971900a4/jOhK5wKjYXhqfOdnJFM3tjtv20x1uD-metaMTAud2VicA==-.webp",
          price: 1200,
          discount_amount: 0,
          offer_percent: 0,
          offer_price: 0,
          variation: {
            name: "Carrier: Airtel number",
            sku: null,
            variation: "cf781262-db91-4847-ab0f-3f39291dc553",
            inventory: 0,
            stock: 0,
          },
          stock: 0,
        },
      ],
    },
    errors: [],
  },
  ...commonCodes,
};
