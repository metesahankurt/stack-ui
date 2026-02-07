import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StackUI - Modern Component Library",
    template: "%s | StackUI"
  },
  description: "Explore and preview beautiful UI components from shadcn/ui and Aceternity UI. Copy-paste ready components for your next project.",
  keywords: ["UI components", "React", "Next.js", "shadcn/ui", "Aceternity UI", "component library", "design system"],
  authors: [{ name: "StackUI" }],
  creator: "StackUI",
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stackui.com",
    title: "StackUI - Modern Component Library",
    description: "Explore and preview beautiful UI components from shadcn/ui and Aceternity UI. Copy-paste ready components for your next project.",
    siteName: "StackUI",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "StackUI - Modern Component Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StackUI - Modern Component Library",
    description: "Explore and preview beautiful UI components from shadcn/ui and Aceternity UI.",
    images: ["/preview.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
