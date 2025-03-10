import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjay Balam | Software Developer",
  description: "Software Developer specializing in Backend & Full-Stack Development",
  keywords: ["Software Developer", "Backend Developer", "Full-Stack Developer", "Portfolio", "Sanjay Balam"],
  authors: [{ name: "Sanjay Balam" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanjaybalam.com",
    title: "Sanjay Balam | Software Developer",
    description: "Software Developer specializing in Backend & Full-Stack Development",
    siteName: "Sanjay Balam Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
