'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import { useEffect } from "react";
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Elegant interior",
//   description: "",
// };

export default function RootLayout({ children }) {
  // const pathname = usePathname();

  // useEffect(() => {
  //   const loadCustomScript = () => {
  //     const existingScript = document.getElementById('jquery-3.7.1.min.js');
  //     if (existingScript) {
  //       existingScript.remove();
  //     }

  //     const script = document.createElement('script');
  //     script.src = '/js/jquery-3.7.1.min.js';
  //     script.id = 'jquery-3.7.1.min.js';
  //     script.async = true;
  //     document.body.appendChild(script);
  //   };

  //   console.log(pathname)

  //   loadCustomScript(); 
  // }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link href="/css/all.min.css" rel="stylesheet" media="screen" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
        <ClientScripts />
        <Header />

        {children}
        
        <Footer />
        <script src="/js/jquery-3.7.1.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/validator.min.js"></script>
        <script src="/js/jquery.slicknav.js"></script>
        <script src="/js/swiper-bundle.min.js"></script>
        <script src="/js/jquery.waypoints.min.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/isotope.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/SmoothScroll.js"></script>
        <script src="/js/parallaxie.js"></script>
        <script src="/js/gsap.min.js"></script>
        <script src="/js/magiccursor.js"></script>
        <script src="/js/SplitText.js"></script>
        <script src="/js/ScrollTrigger.min.js"></script>
        <script src="/js/jquery.mb.YTPlayer.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/function.js"></script>
      </body>
    </html>
  );
}
