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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-around p-4">
      <div>
        <h1 className="text-3xl font-bold">Filra</h1>
      </div>
      {/* its gonna be links to pages */}
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">Features</h1>
        <h1 className="text-xl font-bold">About</h1>
        <h1 className="text-xl font-bold">Login</h1>
      </div>
    </header>
  );
}
