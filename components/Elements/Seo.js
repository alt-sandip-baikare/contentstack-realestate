import React from "react";
import { useRouter } from "next/router";

function Seo({ seoData }) {
//   const { asPath, pathname, req, query, res } = useRouter();
//   const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;

  return (
    <>
      {/* {seoData?.title && <title>{seoData.title}</title>} */}
      {seoData?.description && (
        <meta name="description" content={seoData.description} />
      )}
      {seoData?.keywords && <meta name="keywords" content={seoData.keywords} />}
      
      {/* <link rel="canonical" href={fullUrl} />
      <meta property="og:url" content={fullUrl} /> */}
      {seoData?.title && <meta property="og:title" content={seoData.title} />}
      {seoData?.description && (
        <meta property="og:description" content={seoData.description} />
      )}
      {seoData?.image && <meta property="og:image" content={seoData.og_image[0].url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Altudo's Real Estate" />
    </>
  );
}

export default Seo;
