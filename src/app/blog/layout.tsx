import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | MetaBlog",
  description: "Discover insightful articles and blogs on various topics at MetaBlog.",
  keywords: "MetaBlog blog, articles, insights, trending topics",
  authors: [{ name: "MetaBlog Team" }],
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
