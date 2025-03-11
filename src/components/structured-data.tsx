export function PersonStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sanjay Balam",
          "url": "https://new-porfolio-4ug4.vercel.app/",
          "jobTitle": "Software Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Vectorsoft"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "CBIT Hyderabad",
            "sameAs": "https://www.cbit.ac.in/"
          },
          "knowsAbout": [
            "Software Development",
            "Full-Stack Development",
            "Backend Development",
            "React",
            "Node.js",
            "TypeScript",
            "JavaScript",
            "MongoDB",
            "PostgreSQL"
          ],
          "sameAs": [
            "https://github.com/Sanjay-Balam",
            "https://linkedin.com/in/sanjaybalam",
            "https://leetcode.com/u/SANJAY_BALAM/"
          ]
        })
      }}
    />
  );
} 