import { singleProductData } from "./product.js";

export const categoryGetData = {
  200: {
    message: "Success",
    data: {
      products: [{ ...singleProductData }],
      category: {
        name: "cat litter check",
        slug: "cat-litter-check",
        description: null,
        logo: "https://dev-admin.amarpet.com/images/category/logo.webp",
        banner: "https://dev-admin.amarpet.com/images/category/banner.png",
        menus: [],
        full_path: "cat litter check^cat-litter-check",
      },
      links: {
        first:
          "https://dev-admin.amarpet.com/api/v1/categories/cat-litter-check?page=1",
        last: "https://dev-admin.amarpet.com/api/v1/categories/cat-litter-check?page=1",
      },
      meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        path: "https://dev-admin.amarpet.com/api/v1/categories/cat-litter-check",
        per_page: 16,
        to: 5,
        total: 5,
      },
      attributes: [
        {
          name: "Carrier",
          slug: "sdasdas",
          values: [
            {
              value: "Grameenphone number (1)",
              slug: "sdasdas-grameenphone-number",
              products_count: 1,
            },
            {
              value: "Airtel number (1)",
              slug: "sdasdas-airtel-number",
              products_count: 1,
            },
            {
              value: "Banglalink number (1)",
              slug: "sdasdas-banglalink-number",
              products_count: 1,
            },
          ],
        },
        {
          name: "Color",
          slug: "color",
          values: [
            {
              value: "Redd (2)",
              slug: "color-redd",
              products_count: 2,
            },
            {
              value: "Green one (1)",
              slug: "color-green-one",
              products_count: 1,
            },
            {
              value: "Purplee (3)",
              slug: "color-purplee",
              products_count: 3,
            },
            {
              value: "Whitee (2)",
              slug: "color-whitee",
              products_count: 2,
            },
            {
              value: "Blackk (2)",
              slug: "color-blackk",
              products_count: 2,
            },
            {
              value: "Bold Black (2)",
              slug: "bold-black",
              products_count: 2,
            },
          ],
        },
      ],
      metadata: {
        title: "cat litter check",
        description:
          "If you have a cat, as approximately 25% of US households do according to the American Veterinary Medical Association, the internet may have shown you targeted ads for a health-monitoring cat litter. These products promise to change color in ",
        keywords:
          "If you have a cat, as approximately 25% of US households do according to the American Veterinary Medical Association, the internet may have shown you targeted ads for a health-monitoring cat litter. These products promise to change color in If you ha",
        url: "https://dev.amarpet.com/category/cat-litter-check",
        image: "https://dev-admin.amarpet.com/images/category/banner.png",
      },
    },
    errors: [],
  },
};
