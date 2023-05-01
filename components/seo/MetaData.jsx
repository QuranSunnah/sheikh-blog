import Head from "next/head";

function MetaData({ title, image, description, url, keywords, schema }) {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="_5RKyVpZGJvL8BzKdmSLtS4TkEwyYFnLFMCA2wKls7s"
      />
      <link rel="shortcut icon" href="/favicon.png" />
      <title>{title}</title>
      {/* google console site verification */}
      <meta
        name="google-site-verification"
        content="_5RKyVpZGJvL8BzKdmSLtS4TkEwyYFnLFMCA"
      />
      <meta property="og:title" content={title} key="og-title" />
      <meta property="og:image" content={image} key="og-image" />
      <meta
        property="og:description"
        content={description}
        key="og-description"
      />
      <meta property="og:url" content={url} key="og-url" />

      <meta name="keywords" content={keywords} key="og-keywords" />
      <meta name="description" content={description} key="desc" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

MetaData.defaultProps = {
  title:
    "AmarPet:The largest online store for pet food and accessories in Bangladesh",
  image: "/preview.png",
  description:
    "AmarPet is here to be your trusted pet-care buddy. Even on busy days, your pets do not have to settle for anything less than the best",
  url: "https://amarpet.com/",
  keywords: "pet, petcare, petfood",

  schema: {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: "AmarPet.com",
    image:
      "https://amarpet-space.sgp1.digitaloceanspaces.com/development/company-logo/company_logo",
    "@id": "https://amarpet.com/",
    url: "https://amarpet.com/",
    telephone: "+880 13 2290 8241",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Ka-218, 9th floor, Zakir Complex, Kuril Chowrastha,  Dhaka-1229, Bangladesh.",
      addressLocality: "Dhaka",
      postalCode: "1229",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.8159209",
      longitude: "90.4190932",
    },
    sameAs: [
      "https://www.facebook.com/amarpetcom",
      "https://www.instagram.com/amarpetbd",
      "https://www.instagram.com/amarpetbd",
    ],
  },
};

export default MetaData;
