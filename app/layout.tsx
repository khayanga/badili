import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import TidioChat from "@/components/TidioChat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://badiili.arbarnegroup.com/"),

  title: {
    default: "Badiili Agency",
    template: "%s | Badiili Agency",
  },

  description:
    "Badiili Agency helps sustainable and impact-driven businesses grow through digital strategy, branding, design, and technology solutions across Africa.",

  keywords: [
    "Badili Agency",
    "Digital Agency Africa",
    "Sustainable Branding",
    "Impact-driven Marketing",
    "Web Design Kenya",
    "Digital Strategy",
    "Brand Growth",
    "Marketing Agency Nairobi",
    "Creative Agency Africa",
    "Green Business Marketing",
  ],

  authors: [{ name: "Badiili Agency" }],

  creator: "Badili Agency",

  openGraph: {
    title: "Badili Agency",
    description:
      "We grow brands that grow the planet.",
    url: "https://badiili.arbarnegroup.com/",
    siteName: "Badiili Agency",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Badiili Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Badiili Agency",
    description:
      "We grow brands that grow the planet.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          <TidioChat />
          <GoogleAnalytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}