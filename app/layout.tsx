import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "./atoms/navigation-bar";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
})
export const metadata: Metadata = {
  title: "Nusantara",
  description: "The Archipelago of Knowledge",
  icons: {
    icon: "/textured/3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PoppinsFont.variable} antialiased`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
