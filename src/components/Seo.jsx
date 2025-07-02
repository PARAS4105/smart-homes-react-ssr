import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({ metaData = {} }) => {
  if (!metaData.page_title) return null;

  const baseUrl = "https://swati-react.onrender.com/";
  const fullUrl = `${baseUrl.replace(/\/+$/, "")}/${(metaData.slug || "").replace(/^\/+/, "")}`;

  return (
    <Helmet>
      <title>{metaData.page_title}</title>
      <meta name="description" content={metaData.page_description || ""} />
      <meta name="keywords" content={metaData.page_keywords || ""} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={metaData.page_title} />
      <meta property="og:description" content={metaData.page_description || ""} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="SwatiProcon" />
      {metaData.image && <meta property="og:image" content={metaData.image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaData.page_title} />
      <meta name="twitter:description" content={metaData.page_description || ""} />
      <meta name="twitter:site" content="@SwatiProcon" />
      <meta name="twitter:creator" content="@SwatiProcon" />
      {metaData.image && <meta name="twitter:image" content={metaData.image} />}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="SwatiProcon" />
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default Seo;
