import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import "./layout.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import ThumbNav from "./components/ThumbNav/ThumbNav";
import ConicBackground from "./components/ConicBackground/ConicBackground";
import Metrics from "./components/Metrics/Metrics";

const inter = Questrial({ subsets: ["latin"], weight: '400' });
const source_serif_4 = Source_Serif_4({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arron McCrory - Web Developer",
  description: "A Web Developer",
};

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mainContainer mx-auto py-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl antialiased leading-7">
          {children}
        </div>

        <ThumbNav />
        <ConicBackground />
        <Metrics />
      </body>
    </html>
  );
}
