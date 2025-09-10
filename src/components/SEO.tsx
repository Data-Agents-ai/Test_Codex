import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  structuredData?: Record<string, any> | string;
}

export const SEO = ({ title, description, canonical, image, structuredData }: SEOProps) => {
  const url = canonical || (typeof window !== 'undefined' ? window.location.href : '');
  const desc = description || "AI-enhanced data consultancy for European SMEs. We transform data into intelligent business value.";
  const img = image || "https://lovable.dev/opengraph-image-p98pqg.png";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      {structuredData && (
        <script type="application/ld+json">
          {typeof structuredData === 'string' ? structuredData : JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
