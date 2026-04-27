import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rojil Kusma — Frontend Developer",
  description:
    "Frontend Developer with 3+ years of experience building scalable SaaS and real-time web applications using React and TypeScript.",
  keywords: ["Frontend Developer", "React", "TypeScript", "Next.js", "Nepal"],
  authors: [{ name: "Rojil Kusma" }],
  openGraph: {
    title: "Rojil Kusma — Frontend Developer",
    description:
      "Frontend Developer specializing in React, TypeScript, and cloud-based deployments.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
