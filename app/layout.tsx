import type { Metadata, Viewport } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { Google_Sans_Flex } from "next/font/google";
import NavigationBar from "./atoms/navigation-bar";

const GoogleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-google-sans-flex",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
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
        className={`${GoogleSansFlex.variable} antialiased bg-gradient-to-br from-gray-50 via-white to-blue-50`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
