import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Developer Portfolio - Full-Stack Engineer & AI Enthusiast",
  description: "Portfolio of a passionate software engineer with 2 years of experience in .NET, React, and agentic AI development. Showcasing custom products, creative projects, and photography.",
  keywords: ["software engineer", "full-stack developer", ".NET", "React", "AI development", "portfolio", "photography"],
  authors: [{ name: "Creative Developer" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
