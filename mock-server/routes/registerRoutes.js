import addressesRoutes from "./address.js";
import authRoutes from "./authRoutes.js";
import brandRoutes from "./brandRoutes.js";
import cartRoutes from "./cartRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import homeRoutes from "./homeRoutes.js";
import mainMenuRoutes from "./mainMenuRoutes.js";
import newsletterRoutes from "./newsletterRoutes.js";
import productRoutes from "./productRoutes.js";
import profileRoutes from "./profile.js";
import searchRoutes from "./searchRoutes.js";
import wishlistRoutes from "./wishlistRoutes.js";

const registerAllRoutes = (fastify) => {
  fastify.register(profileRoutes);
  fastify.register(homeRoutes);
  fastify.register(mainMenuRoutes);
  fastify.register(addressesRoutes);
  fastify.register(categoryRoutes);
  fastify.register(wishlistRoutes);
  fastify.register(cartRoutes);
  fastify.register(brandRoutes);
  fastify.register(searchRoutes);
  fastify.register(productRoutes);
  fastify.register(authRoutes);
  fastify.register(newsletterRoutes);
};

export default registerAllRoutes;
