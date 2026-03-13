import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  title: "HAVAKU — Where Beauty Meets Celebration",
  description: "Premium beauty studio for bridal transformations, curated jewelry, and handcrafted beauty essentials.",
  keywords: "HAVAKU, bridal makeup, beauty studio, jewelry, handmade beauty products",
  openGraph: {
    title: "HAVAKU — Where Beauty Meets Celebration",
    description: "Premium beauty studio for bridal transformations, curated jewelry, and handcrafted beauty essentials.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <WishlistProvider>
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
