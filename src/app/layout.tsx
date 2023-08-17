import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "Assignment",
  description: "Assignment for intigral",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primaryBg text-white">{children}</body>
    </html>
  );
}
