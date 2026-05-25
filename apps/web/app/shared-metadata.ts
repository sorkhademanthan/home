import { Metadata, Viewport } from "next";

const MAIN_TITLE = "Harsh Jadhav";
const MAIN_DESCRIPTION =
  "Harsh Jadhav, also known as harshjdhv, is a software engineer in Mumbai building Componentry, React UI components, user-facing applications, and the systems behind them.";
const SITE_URL = "https://www.harshjdhv.com";
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const sharedMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: MAIN_TITLE,
    template: `%s | Harsh Jadhav`,
  },
  description: MAIN_DESCRIPTION,
  keywords: [
    "Harsh Jadhav",
    "harshjdhv",
    "Harsh Jadhav harshjdhv",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Engineer",
    "Open Source Developer",
    "Web Application Development",
    "React UI Components",
    "Componentry",
    "System Design",
    "Interface Design",
    "Mumbai Software Engineer",
    "Mumbai",
  ],
  authors: [{ name: "Harsh Jadhav", url: SITE_URL }],
  creator: "Harsh Jadhav",
  publisher: "Harsh Jadhav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    siteName: "Harsh Jadhav",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Harsh Jadhav - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    creator: "@harshjdhv",
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
