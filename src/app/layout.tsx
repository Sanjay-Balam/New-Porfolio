import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjay Balam | Software Engineer & Full-Stack Developer Portfolio",
  description: "Portfolio of Sanjay Balam, a Software Engineer specializing in Backend & Full-Stack Development with expertise in React, Node.js, and TypeScript",
  keywords: [
    "Sanjay Balam", 
    "Software Engineer", 
    "Software Developer", 
    "Full-Stack Developer", 
    "Backend Developer", 
    "Portfolio", 
    "React Developer", 
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer India",
    "CBIT Hyderabad"
  ],
  authors: [{ name: "Sanjay Balam" }],
  creator: "Sanjay Balam",
  publisher: "Sanjay Balam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://new-porfolio-4ug4.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://new-porfolio-4ug4.vercel.app",
    title: "Sanjay Balam | Software Engineer & Full-Stack Developer Portfolio",
    description: "Portfolio of Sanjay Balam, a Software Engineer specializing in Backend & Full-Stack Development with expertise in React, Node.js, and TypeScript",
    siteName: "Sanjay Balam Portfolio",
    images: [
      {
        url: "/og-image.png", // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: "Sanjay Balam - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Balam | Software Engineer & Full-Stack Developer Portfolio",
    description: "Portfolio of Sanjay Balam, a Software Engineer specializing in Backend & Full-Stack Development",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:title" content="Sanjay Balam | Software Engineer & Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Sanjay Balam, a Software Engineer specializing in Backend & Full-Stack Development" />
        <meta property="og:image" content="https://new-porfolio-4ug4.vercel.app/og-image.png" />
        <meta property="og:url" content="https://new-porfolio-4ug4.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
