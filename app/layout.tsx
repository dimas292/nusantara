import type { Metadata, Viewport } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import NavigationBar from "./atoms/navigation-bar";

const OswaldFont = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
  display: "swap", // Ensure text remains visible during font load
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: "Nusantara",
  description: "The Archipelago of Knowledge",
  icons: {
    icon: "/textured/3.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#dc2626",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${OswaldFont.variable} antialiased`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
