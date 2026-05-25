import { Metadata, Viewport } from "next";

const MAIN_TITLE = "Manthan Sorkhade";
const MAIN_DESCRIPTION =
  "Manthan Sorkhade is a software engineer and builder focusing on polished web interfaces and clean, reliable systems.";
const SITE_URL = "https://www.sorkhademanthan.com";
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const sharedMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: MAIN_TITLE,
    template: `%s | Manthan Sorkhade`,
  },
  description: MAIN_DESCRIPTION,
  keywords: [
    "Manthan Sorkhade",
    "sorkhademanthan",
    "Manthan Sorkhade sorkhademanthan",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Engineer",
    "Open Source Developer",
    "Web Application Development",
    "React UI Components",
    "System Design",
    "Interface Design",
  ],
  authors: [{ name: "Manthan Sorkhade", url: SITE_URL }],
  creator: "Manthan Sorkhade",
  publisher: "Manthan Sorkhade",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    siteName: "Manthan Sorkhade",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Manthan Sorkhade - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    creator: "@ManthanSorkhade",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon-circle.png",
    shortcut: "/favicon-circle.png",
    apple: "/favicon-circle.png",
  },
};

export const sharedViewport: Viewport = {
  themeColor: "white",
  width: "device-width",
  initialScale: 1,
};
