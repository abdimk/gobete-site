import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Set SITE_URL when you deploy so link previews resolve against the real domain.
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: "GoBete Find your next home in Addis Ababa",
  description:
    "GoBete gathers homes for rent and for sale across Addis Ababa — from Telegram, Facebook and property sites — into one calm, filterable feed. Free on Android.",
  openGraph: {
    title: "GoBete Find your next home in Addis Ababa",
    description:
      "Rentals and homes for sale across Addis Ababa, in one calm feed. Free on Android.",
    images: ["/gobete.png"],
    type: "website",
  },
  icons: { icon: "/gobete.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#FBFAF7" />
      </head>
      <body>{children}</body>
    </html>
  );
}
