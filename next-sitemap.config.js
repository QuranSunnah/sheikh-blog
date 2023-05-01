const server = process.env.NEXT_PUBLIC_SERVER;
const amarpetSiteUrl = process.env.NEXT_PUBLIC_SITE_ABSOLUTE_URL;
const disAllowLinks = [
  "/category/*",
  "/brands/*",
  "/product/*",
  "/my-account",
  "/my-account/*",
  "/my-orders",
  "/my-wishlist",
  "/addresses",
  "/addresses/default",
  "/addresses/create",
  "/addresses/*/edit",
  "/my-cart",
  "/checkout",
  "/payment-info",
  "/orders-success/*",
  "/my-orders/*",
  "/orders-cancel-confirm/*",
  "/orders-cancel/*",
  "/newsletter-subscription",
  "/forget-password",
  "/signin",
  "/signin/*",
  "/signup",
  "/signup/*",
];

const policy = {
  DEV: { userAgent: "*", disallow: "/" },
  STAGING: { userAgent: "*", disallow: "/" },
  PROD: {
    userAgent: "*",
    disallow: disAllowLinks,
  },
};

const config = {
  siteUrl: amarpetSiteUrl,
  generateRobotsTxt: true,
  exclude: ["/product-sitemap.xml", ...disAllowLinks],
  robotsTxtOptions: {
    additionalSitemaps: [`${amarpetSiteUrl}/product-sitemap.xml`],
    policies: [policy[server]],
  },
  priority: 0.8,
  changefreq: false,
};

module.exports = config;
