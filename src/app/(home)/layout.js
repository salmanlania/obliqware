'use client'

import "@fontsource/rubik/latin.css";
import "@fontsource/raleway/latin.css";
import "@fontsource/red-hat-text/latin.css";
import "@fontsource/barlow/latin.css";
import "@fontsource/heebo/latin.css";
import "@fontsource/open-sans/latin.css";
import "@fontsource/mukta/latin.css";
import "@/assets/vendors/tolak-icons/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "react-circular-progressbar/dist/styles.css";
import "@/assets/vendors/animate/animate.min.css";
import "@/assets/vendors/fontawesome/css/all.min.css";
import "@/assets/vendors/icofont/icofont.min.css";
import "@/assets/vendors/tolak-icons-two/style.css";
import ThemeProvider from "@/Provider/ThemeProvider";
import "aos/dist/aos.css";

import "@/assets/css/tolak.css";
import "@/assets/css/tolak-dark.css";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import Script from 'next/script';


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [themeState, setThemeState] = useState("light");

  useEffect(() => {
    if (pathname === "/-dark" || pathname === "/home2-dark" || pathname === "/home3-dark" || pathname === "/home4-dark") {
      setThemeState("dark");
    } else {
      setThemeState("light");
    }
  }, [pathname]);
  return (
    <html lang='en'>
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F22MLNCZ7T"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F22MLNCZ7T');
          `}
        </Script>
      </head>

      <body className={`custom- cursor ${pathname === "/home5" ? 'home5' : pathname === "/home5-one" ? 'home5' : pathname === "/home6" ? "home6" : pathname === "/home6-one" ? "home6" : pathname === "/home7" ? 'home7' : pathname === "/home7-one" ? 'home7' : pathname === "/home-boxed" ? "boxed-wrapper" : ''} ${themeState}`}>


        <ThemeProvider>{children}</ThemeProvider>
      </body>


    </html >
  );
}
