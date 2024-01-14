import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StartNow from "@/components/home/StartNow";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Boldo",
  description: "Join the bloggers community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
        <div className="max-w-1400px mx-auto px-100px">
          <StartNow />
          <Footer />
        </div>
      </body>
    </html>
  );
}
