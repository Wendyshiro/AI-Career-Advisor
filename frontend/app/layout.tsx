import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importing the Inter font from Google Fonts
import "./globals.css"; // Ensure your global CSS file is imported

// Initialize Inter font with subsets and a custom variable name
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // This defines the custom variable to be used in the CSS
});

export const metadata: Metadata = {
  title: "AI Career Advisor App",
  description: " ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Define the types for children prop directly
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
