import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpaceX Mission Dashboard",
  description: "A futuristic SpaceX-inspired mission dashboard built with Next.js, featuring rockets, missions, animations, and Elon Musk–themed UI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
