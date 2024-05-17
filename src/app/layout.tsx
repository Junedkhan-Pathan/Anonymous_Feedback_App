import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feedback App-by Junedkhan",
  description: "Made by Junedkhan LR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="flex flex-col max-h-screen">
          <Navbar />

          <div className="flex-grow ">
            <div className={inter.className}>
              {children}
              <Toaster />
            </div>
          </div>

          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
