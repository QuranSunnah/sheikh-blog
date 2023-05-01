import { fetchSiteMapUrl } from "@/backend-api/sitemap";
import { getServerSideSitemapLegacy } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const { data } = (await fetchSiteMapUrl()) || { data: [] };
  const fields = data.map((link) => {
    return {
      loc: `${process.env.NEXT_PUBLIC_SITE_ABSOLUTE_URL}/${link.slug}`,
      lastmod: link.updated_at,
      priority: 0.7,
    };
  });

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Sitemap() {}
