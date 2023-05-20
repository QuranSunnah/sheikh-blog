import { singleProductData } from "./product.js";

export const searchGetData = {
  200: {
    message: "Success",
    data: {
      products: [{ ...singleProductData }],
      links: {
        first: "https://dev-admin.amarpet.com/api/v1/search?page=1",
        last: "https://dev-admin.amarpet.com/api/v1/search?page=1",
      },
      meta: {
        current_page: 1,
        from: null,
        last_page: 1,
        path: "https://dev-admin.amarpet.com/api/v1/search",
        per_page: 16,
        to: null,
        total: 0,
      },
      attributes: [
        {
          name: "Carrier",
          slug: "sdasdas",
          values: [
            {
              value: "Grameenphone number (10)",
              slug: "sdasdas-grameenphone-number",
              products_count: 10,
            },
            {
              value: "Airtel number (18)",
              slug: "sdasdas-airtel-number",
              products_count: 18,
            },
            {
              value: "Banglalink number (16)",
              slug: "sdasdas-banglalink-number",
              products_count: 16,
            },
          ],
        },
        {
          name: "Color",
          slug: "color",
          values: [
            {
              value: "Redd (13)",
              slug: "color-redd",
              products_count: 13,
            },
            {
              value: "Green one (24)",
              slug: "color-green-one",
              products_count: 24,
            },
            {
              value: "Purplee (14)",
              slug: "color-purplee",
              products_count: 14,
            },
            {
              value: "Whitee (6)",
              slug: "color-whitee",
              products_count: 6,
            },
            {
              value: "Blackk (30)",
              slug: "color-blackk",
              products_count: 30,
            },
            {
              value: "Bold Black (18)",
              slug: "bold-black",
              products_count: 18,
            },
          ],
        },
      ],
    },
    errors: [],
  },
};
