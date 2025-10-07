import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Next.js Demo 2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {Navbar()}
        <main>{children}</main>
      </body>
    </html>
  );
}

