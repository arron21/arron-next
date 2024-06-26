import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Nav from "./components/Nav/Nav";
        

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arron McCrory",
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
        <div className="px-4">

        <Nav  items={items} />
        </div>
        <div className="px-4 mx-auto">

        {children}
        </div>
        </body>
      
    </html>
  );
}
