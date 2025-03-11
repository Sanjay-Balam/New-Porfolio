import Head from 'next/head';

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export function SeoHead({
  title = "Sanjay Balam | Software Engineer & Full-Stack Developer Portfolio",
  description = "Portfolio of Sanjay Balam, a Software Engineer specializing in Backend & Full-Stack Development",
  canonicalUrl = "https://new-porfolio-4ug4.vercel.app",
}: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${canonicalUrl}/og-image.png`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${canonicalUrl}/og-image.png`} />
    </Head>
  );
} 