import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | MetaBlog",
  description: "Explore the latest blogs and articles on MetaBlog's home page.",
  keywords: "MetaBlog home, featured blogs, trending articles",
  authors: [{ name: "MetaBlog Team" }],
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
