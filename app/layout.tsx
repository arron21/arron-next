import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./layout.css";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import TopNav from "./components/Nav/TopNav";
import GodRays from "./components/GodRays/GodRays";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arron McCrory - Web Developer",
  description: "A Web Developer",
};

export const items = [
  {
      label: 'Home',
      url: '/',
  },
  {
      label: 'Engineering',
      url: '/engineering',
  },
  {
    label: 'Skills',
    url: '/skills',
},
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          
        <GodRays />
        <div className="mx-auto px-6 max-w-4xl md:px-12">
          <TopNav />
        </div>

        <div className=" mainContainer mx-auto px-6 max-w-4xl md:px-12 antialiased leading-7">
          {children}
        </div>
        </body>
      
    </html>
  );
}
