// // // // // // 'use client'

// // // // // // import "@fontsource/rubik/latin.css";
// // // // // // import "@fontsource/raleway/latin.css";
// // // // // // import "@fontsource/red-hat-text/latin.css";
// // // // // // import "@fontsource/barlow/latin.css";
// // // // // // import "@fontsource/heebo/latin.css";
// // // // // // import "@fontsource/open-sans/latin.css";
// // // // // // import "@fontsource/mukta/latin.css";
// // // // // // import "@/assets/vendors/tolak-icons/style.css";
// // // // // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // // // import "tiny-slider/dist/tiny-slider.css";
// // // // // // import "react-circular-progressbar/dist/styles.css";
// // // // // // import "@/assets/vendors/animate/animate.min.css";
// // // // // // import "@/assets/vendors/fontawesome/css/all.min.css";
// // // // // // import "@/assets/vendors/icofont/icofont.min.css";
// // // // // // import "@/assets/vendors/tolak-icons-two/style.css";
// // // // // // import ThemeProvider from "@/Provider/ThemeProvider";
// // // // // // import "aos/dist/aos.css";
// // // // // // import Script from 'next/script';
// // // // // // import Head from 'next/head';

// // // // // // import "@/assets/css/tolak.css";
// // // // // // import "@/assets/css/tolak-dark.css";
// // // // // // import { usePathname } from "next/navigation";

// // // // // // import { useEffect, useState } from "react";

// // // // // // export default function RootLayout({ children }) {
// // // // // //   const pathname = usePathname();
// // // // // //   const [themeState, setThemeState] = useState("light");

// // // // // //   useEffect(() => {
// // // // // //     console.log(`Navigated to: ${pathname}`);
// // // // // //     if (pathname === "/-dark" || pathname === "/home2-dark" || pathname === "/home3-dark" || pathname === "/home4-dark") {
// // // // // //       setThemeState("dark");
// // // // // //     } else {
// // // // // //       setThemeState("light");
// // // // // //     }
// // // // // //   }, [pathname]);
// // // // // //   return (
// // // // // //     <html lang='en'>
// // // // // //       <Head>

// // // // // //       </Head>
// // // // // //       {/* Google Analytics Script */}
// // // // // //       <Script
// // // // // //         async
// // // // // //         src={`https://www.googletagmanager.com/gtag/js?id=G-F22MLNCZ7T`}
// // // // // //         strategy="afterInteractive"
// // // // // //         onLoad={() => console.log("Google Analytics script loaded")}
// // // // // //       />
// // // // // //       <Script id="google-analytics" strategy="afterInteractive">
// // // // // //         {`
// // // // // //             window.dataLayer = window.dataLayer || [];
// // // // // //             function gtag(){dataLayer.push(arguments);}
// // // // // //             gtag('js', new Date());
// // // // // //             gtag('config', 'G-F22MLNCZ7T');
// // // // // //           `}
// // // // // //       </Script>

// // // // // //       {/* Google Ads Script */}
// // // // // //       <Script
// // // // // //         async
// // // // // //         src={`https://www.googletagmanager.com/gtag/js?id=AW-16761372846`}
// // // // // //         strategy="afterInteractive"
// // // // // //         onLoad={() => console.log("Google Ads script loaded")}
// // // // // //       />
// // // // // //       <Script id="google-ads" strategy="afterInteractive">
// // // // // //         {`
// // // // // //             window.dataLayer = window.dataLayer || [];
// // // // // //             function gtag(){dataLayer.push(arguments);}
// // // // // //             gtag('js', new Date());
// // // // // //             gtag('config', 'AW-16761372846');
// // // // // //           `}
// // // // // //       </Script>

// // // // // //       <body className={`custom- cursor ${pathname === "/home5" ? 'home5' : pathname === "/home5-one" ? 'home5' : pathname === "/home6" ? "home6" : pathname === "/home6-one" ? "home6" : pathname === "/home7" ? 'home7' : pathname === "/home7-one" ? 'home7' : pathname === "/home-boxed" ? "boxed-wrapper" : ''} ${themeState}`}>


// // // // // //         <ThemeProvider>{children}</ThemeProvider>
// // // // // //       </body>


// // // // // //     </html >
// // // // // //   );
// // // // // // }
// // // // // // // 'use client';

// // // // // // // import Layout from '../layout'; // Import the global layout if needed
// // // // // // // import React from 'react';

// // // // // // // export default function HomeLayout({ children }) {
// // // // // // //   return (
// // // // // // //     <Layout>
// // // // // // //       {children}
// // // // // // //     </Layout>
// // // // // // //   );
// // // // // // // }

// // // // // 'use client'

// // // // // import "@fontsource/rubik/latin.css";
// // // // // import "@fontsource/raleway/latin.css";
// // // // // import "@fontsource/red-hat-text/latin.css";
// // // // // import "@fontsource/barlow/latin.css";
// // // // // import "@fontsource/heebo/latin.css";
// // // // // import "@fontsource/open-sans/latin.css";
// // // // // import "@fontsource/mukta/latin.css";
// // // // // import "@/assets/vendors/tolak-icons/style.css";
// // // // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // // import "tiny-slider/dist/tiny-slider.css";
// // // // // import "react-circular-progressbar/dist/styles.css";
// // // // // import "@/assets/vendors/animate/animate.min.css";
// // // // // import "@/assets/vendors/fontawesome/css/all.min.css";
// // // // // import "@/assets/vendors/icofont/icofont.min.css";
// // // // // import "@/assets/vendors/tolak-icons-two/style.css";
// // // // // import ThemeProvider from "@/Provider/ThemeProvider";
// // // // // import "aos/dist/aos.css";
// // // // // import Script from 'next/script';
// // // // // import Head from 'next/head';

// // // // // import "@/assets/css/tolak.css";
// // // // // import "@/assets/css/tolak-dark.css";
// // // // // import { usePathname } from "next/navigation";

// // // // // import { useEffect, useState } from "react";

// // // // // export default function RootLayout({ children }) {
// // // // //   const pathname = usePathname();
// // // // //   const [themeState, setThemeState] = useState("light");

// // // // //   useEffect(() => {
// // // // //     if (pathname === "/-dark" || pathname === "/home2-dark" || pathname === "/home3-dark" || pathname === "/home4-dark") {
// // // // //       setThemeState("dark");
// // // // //     } else {
// // // // //       setThemeState("light");
// // // // //     }
// // // // //   }, [pathname]);
// // // // //   return (
// // // // //     <html lang='en'>
// // // // //       <Head>

// // // // //       </Head>
// // // // //       {/* Google Analytics Script */}
// // // // //       <Script
// // // // //         async
// // // // //         src={`https://www.googletagmanager.com/gtag/js?id=G-F22MLNCZ7T`}
// // // // //         strategy="afterInteractive"
// // // // //       />
// // // // //       <Script id="google-analytics" strategy="afterInteractive">
// // // // //         {`
// // // // //             window.dataLayer = window.dataLayer || [];
// // // // //             function gtag(){dataLayer.push(arguments);}
// // // // //             gtag('js', new Date());
// // // // //             gtag('config', 'G-F22MLNCZ7T');
// // // // //           `}
// // // // //       </Script>

// // // // //       {/* Google Ads Script */}
// // // // //       <Script
// // // // //         async
// // // // //         src={`https://www.googletagmanager.com/gtag/js?id=AW-16761372846`}
// // // // //         strategy="afterInteractive"
// // // // //       />
// // // // //       <Script id="google-ads" strategy="afterInteractive">
// // // // //         {`
// // // // //             window.dataLayer = window.dataLayer || [];
// // // // //             function gtag(){dataLayer.push(arguments);}
// // // // //             gtag('js', new Date());
// // // // //             gtag('config', 'AW-16761372846');
// // // // //           `}
// // // // //       </Script>

// // // // //       <body className={`custom- cursor ${pathname === "/home5" ? 'home5' : pathname === "/home5-one" ? 'home5' : pathname === "/home6" ? "home6" : pathname === "/home6-one" ? "home6" : pathname === "/home7" ? 'home7' : pathname === "/home7-one" ? 'home7' : pathname === "/home-boxed" ? "boxed-wrapper" : ''} ${themeState}`}>


// // // // //         <ThemeProvider>{children}</ThemeProvider>
// // // // //       </body>


// // // // //     </html >
// // // // //   );
// // // // // }
// // // // // // 'use client';

// // // // // // import Layout from '../layout'; // Import the global layout if needed
// // // // // // import React from 'react';

// // // // // // export default function HomeLayout({ children }) {
// // // // // //   return (
// // // // // //     <Layout>
// // // // // //       {children}
// // // // // //     </Layout>
// // // // // //   );
// // // // // // }





// // // // // 'use client'

// // // // // import "@fontsource/rubik/latin.css";
// // // // // import "@fontsource/raleway/latin.css";
// // // // // import "@fontsource/red-hat-text/latin.css";
// // // // // import "@fontsource/barlow/latin.css";
// // // // // import "@fontsource/heebo/latin.css";
// // // // // import "@fontsource/open-sans/latin.css";
// // // // // import "@fontsource/mukta/latin.css";
// // // // // import "@/assets/vendors/tolak-icons/style.css";
// // // // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // // import "tiny-slider/dist/tiny-slider.css";
// // // // // import "react-circular-progressbar/dist/styles.css";
// // // // // import "@/assets/vendors/animate/animate.min.css";
// // // // // import "@/assets/vendors/fontawesome/css/all.min.css";
// // // // // import "@/assets/vendors/icofont/icofont.min.css";
// // // // // import "@/assets/vendors/tolak-icons-two/style.css";
// // // // // import ThemeProvider from "@/Provider/ThemeProvider";
// // // // // import "aos/dist/aos.css";
// // // // // import Script from 'next/script';
// // // // // import { usePathname } from "next/navigation";
// // // // // import { useEffect, useState } from "react";
// // // // // import "@/assets/css/tolak.css";
// // // // // import "@/assets/css/tolak-dark.css";
// // // // // import * as gtag from '@/lib/gtag'

// // // // // export default function RootLayout({ children }) {
// // // // //   const pathname = usePathname();
// // // // //   const [themeState, setThemeState] = useState("light");

// // // // //   // Theme handling
// // // // //   useEffect(() => {
// // // // //     if (pathname === "/-dark" || pathname === "/home2-dark" || 
// // // // //         pathname === "/home3-dark" || pathname === "/home4-dark") {
// // // // //       setThemeState("dark");
// // // // //     } else {
// // // // //       setThemeState("light");
// // // // //     }
// // // // //   }, [pathname]);

// // // // //   // Analytics page tracking
// // // // //   useEffect(() => {
// // // // //     const handleRouteChange = (url) => {
// // // // //       gtag.pageview(url);
// // // // //     };

// // // // //     if (pathname) {
// // // // //       handleRouteChange(pathname);
// // // // //     }
// // // // //   }, [pathname]);

// // // // //   return (
// // // // //     <html lang='en'>
// // // // //       <head>
// // // // //         {/* Google Analytics Script */}
// // // // //         <Script
// // // // //           src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
// // // // //           strategy="worker"
// // // // //         />
// // // // //         <Script id="google-analytics" strategy="worker">
// // // // //           {`
// // // // //             window.dataLayer = window.dataLayer || [];
// // // // //             function gtag(){dataLayer.push(arguments);}
// // // // //             gtag('js', new Date());
// // // // //             gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
// // // // //               page_location: window.location.href,
// // // // //               page_path: '${pathname}'
// // // // //             });
// // // // //             gtag('config', '${gtag.GOOGLE_ADS_ID}', {
// // // // //               page_location: window.location.href,
// // // // //               page_path: '${pathname}'
// // // // //             });
// // // // //           `}
// // // // //         </Script>
// // // // //       </head>

// // // // //       <body className={`custom- cursor ${
// // // // //         pathname === "/home5" ? 'home5' : 
// // // // //         pathname === "/home5-one" ? 'home5' : 
// // // // //         pathname === "/home6" ? "home6" : 
// // // // //         pathname === "/home6-one" ? "home6" : 
// // // // //         pathname === "/home7" ? 'home7' : 
// // // // //         pathname === "/home7-one" ? 'home7' : 
// // // // //         pathname === "/home-boxed" ? "boxed-wrapper" : ''
// // // // //       } ${themeState}`}>
// // // // //         <ThemeProvider>{children}</ThemeProvider>
// // // // //       </body>
// // // // //     </html>
// // // // //   );
// // // // // }


// // // // 'use client'

// // // // import "@fontsource/rubik/latin.css";
// // // // import "@fontsource/raleway/latin.css";
// // // // import "@fontsource/red-hat-text/latin.css";
// // // // import "@fontsource/barlow/latin.css";
// // // // import "@fontsource/heebo/latin.css";
// // // // import "@fontsource/open-sans/latin.css";
// // // // import "@fontsource/mukta/latin.css";
// // // // import "@/assets/vendors/tolak-icons/style.css";
// // // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // import "tiny-slider/dist/tiny-slider.css";
// // // // import "react-circular-progressbar/dist/styles.css";
// // // // import "@/assets/vendors/animate/animate.min.css";
// // // // import "@/assets/vendors/fontawesome/css/all.min.css";
// // // // import "@/assets/vendors/icofont/icofont.min.css";
// // // // import "@/assets/vendors/tolak-icons-two/style.css";
// // // // import ThemeProvider from "@/Provider/ThemeProvider";
// // // // import "aos/dist/aos.css";
// // // // import Script from 'next/script';
// // // // import { usePathname } from "next/navigation";
// // // // import { useEffect, useState } from "react";
// // // // import "@/assets/css/tolak.css";
// // // // import "@/assets/css/tolak-dark.css";

// // // // export default function RootLayout({ children }) {
// // // //   const pathname = usePathname();
// // // //   const [themeState, setThemeState] = useState("light");
// // // //   const [isGtagReady, setIsGtagReady] = useState(false);

// // // //   // Theme handling
// // // //   useEffect(() => {
// // // //     if (pathname === "/-dark" || pathname === "/home2-dark" || 
// // // //         pathname === "/home3-dark" || pathname === "/home4-dark") {
// // // //       setThemeState("dark");
// // // //     } else {
// // // //       setThemeState("light");
// // // //     }
// // // //   }, [pathname]);

// // // //   // Track page views
// // // //   useEffect(() => {
// // // //     if (isGtagReady && pathname && typeof window !== 'undefined') {
// // // //       window.gtag('config', 'G-F22MLNCZ7T', {
// // // //         page_path: pathname,
// // // //         page_location: window.location.href,
// // // //       });
// // // //       window.gtag('config', 'AW-16761372846', {
// // // //         page_path: pathname,
// // // //         page_location: window.location.href,
// // // //       });
// // // //     }
// // // //   }, [isGtagReady, pathname]);

// // // //   const onGtagLoad = () => {
// // // //     console.log('Google Analytics script loaded');
// // // //     setIsGtagReady(true);
// // // //   };

// // // //   return (
// // // //     <html lang='en'>
// // // //       <head>
// // // //         {/* Google Analytics Script */}
// // // //         <Script
// // // //           src="https://www.googletagmanager.com/gtag/js?id=G-F22MLNCZ7T"
// // // //           strategy="afterInteractive"
// // // //           onLoad={onGtagLoad}
// // // //         />
// // // //         <Script id="google-analytics" strategy="afterInteractive">
// // // //           {`
// // // //             window.dataLayer = window.dataLayer || [];
// // // //             function gtag(){dataLayer.push(arguments);}
// // // //             gtag('js', new Date());
// // // //             gtag('config', 'G-F22MLNCZ7T');
// // // //             gtag('config', 'AW-16761372846');
// // // //           `}
// // // //         </Script>
// // // //       </head>

// // // //       <body className={`custom- cursor ${
// // // //         pathname === "/home5" ? 'home5' : 
// // // //         pathname === "/home5-one" ? 'home5' : 
// // // //         pathname === "/home6" ? "home6" : 
// // // //         pathname === "/home6-one" ? "home6" : 
// // // //         pathname === "/home7" ? 'home7' : 
// // // //         pathname === "/home7-one" ? 'home7' : 
// // // //         pathname === "/home-boxed" ? "boxed-wrapper" : ''
// // // //       } ${themeState}`}>
// // // //         <ThemeProvider>{children}</ThemeProvider>
// // // //       </body>
// // // //     </html>
// // // //   );
// // // // }

// // // 'use client'

// // // import "@fontsource/rubik/latin.css";
// // // import "@fontsource/raleway/latin.css";
// // // import "@fontsource/red-hat-text/latin.css";
// // // import "@fontsource/barlow/latin.css";
// // // import "@fontsource/heebo/latin.css";
// // // import "@fontsource/open-sans/latin.css";
// // // import "@fontsource/mukta/latin.css";
// // // import "@/assets/vendors/tolak-icons/style.css";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import "tiny-slider/dist/tiny-slider.css";
// // // import "react-circular-progressbar/dist/styles.css";
// // // import "@/assets/vendors/animate/animate.min.css";
// // // import "@/assets/vendors/fontawesome/css/all.min.css";
// // // import "@/assets/vendors/icofont/icofont.min.css";
// // // import "@/assets/vendors/tolak-icons-two/style.css";
// // // import ThemeProvider from "@/Provider/ThemeProvider";
// // // import "aos/dist/aos.css";
// // // import Script from 'next/script';
// // // import { usePathname } from "next/navigation";
// // // import { useEffect, useState } from "react";
// // // import "@/assets/css/tolak.css";
// // // import "@/assets/css/tolak-dark.css";

// // // export default function RootLayout({ children }) {
// // //   const pathname = usePathname();
// // //   const [themeState, setThemeState] = useState("light");
// // //   const [isGtagLoaded, setIsGtagLoaded] = useState(false);
// // //   const [isGtagInitialized, setIsGtagInitialized] = useState(false);

// // //   // Theme handling
// // //   useEffect(() => {
// // //     if (pathname === "/-dark" || pathname === "/home2-dark" || 
// // //         pathname === "/home3-dark" || pathname === "/home4-dark") {
// // //       setThemeState("dark");
// // //     } else {
// // //       setThemeState("light");
// // //     }
// // //   }, [pathname]);

// // //   // Initialize gtag
// // //   useEffect(() => {
// // //     if (isGtagLoaded && !isGtagInitialized && typeof window !== 'undefined') {
// // //       console.log('Initializing gtag...');
// // //       window.dataLayer = window.dataLayer || [];
// // //       window.gtag = function() {
// // //         window.dataLayer.push(arguments);
// // //       };
// // //       window.gtag('js', new Date());
// // //       window.gtag('config', 'G-F22MLNCZ7T');
// // //       window.gtag('config', 'AW-16761372846');
// // //       setIsGtagInitialized(true);
// // //       console.log('Gtag initialized successfully');
// // //     }
// // //   }, [isGtagLoaded, isGtagInitialized]);

// // //   // Track page views
// // //   useEffect(() => {
// // //     if (isGtagInitialized && pathname && typeof window !== 'undefined') {
// // //       console.log('Page changed to:', pathname);
// // //       try {
// // //         window.gtag('config', 'G-F22MLNCZ7T', {
// // //           page_path: pathname,
// // //           page_location: window.location.href,
// // //         });
// // //         window.gtag('config', 'AW-16761372846', {
// // //           page_path: pathname,
// // //           page_location: window.location.href,
// // //         });
// // //         console.log('Pageview tracked successfully for:', pathname);
// // //       } catch (error) {
// // //         console.error('Error tracking pageview:', error);
// // //       }
// // //     }
// // //   }, [isGtagInitialized, pathname]);

// // //   const onGtagLoad = () => {
// // //     console.log('Google Analytics script loaded');
// // //     setIsGtagLoaded(true);
// // //   };

// // //   const onGtagError = () => {
// // //     console.error('Failed to load Google Analytics script');
// // //   };

// // //   return (
// // //     <html lang='en'>
// // //       <head>
// // //         <Script
// // //           src="https://www.googletagmanager.com/gtag/js?id=G-F22MLNCZ7T"
// // //           strategy="afterInteractive"
// // //           onLoad={onGtagLoad}
// // //           onError={onGtagError}
// // //         />
// // //       </head>

// // //       <body className={`custom- cursor ${
// // //         pathname === "/home5" ? 'home5' : 
// // //         pathname === "/home5-one" ? 'home5' : 
// // //         pathname === "/home6" ? "home6" : 
// // //         pathname === "/home6-one" ? "home6" : 
// // //         pathname === "/home7" ? 'home7' : 
// // //         pathname === "/home7-one" ? 'home7' : 
// // //         pathname === "/home-boxed" ? "boxed-wrapper" : ''
// // //       } ${themeState}`}>
// // //         <ThemeProvider>{children}</ThemeProvider>
// // //       </body>
// // //     </html>
// // //   );
// // // }


// // 'use client'

// // import "@fontsource/rubik/latin.css";
// // import "@fontsource/raleway/latin.css";
// // import "@fontsource/red-hat-text/latin.css";
// // import "@fontsource/barlow/latin.css";
// // import "@fontsource/heebo/latin.css";
// // import "@fontsource/open-sans/latin.css";
// // import "@fontsource/mukta/latin.css";
// // import "@/assets/vendors/tolak-icons/style.css";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "tiny-slider/dist/tiny-slider.css";
// // import "react-circular-progressbar/dist/styles.css";
// // import "@/assets/vendors/animate/animate.min.css";
// // import "@/assets/vendors/fontawesome/css/all.min.css";
// // import "@/assets/vendors/icofont/icofont.min.css";
// // import "@/assets/vendors/tolak-icons-two/style.css";
// // import ThemeProvider from "@/Provider/ThemeProvider";
// // import "aos/dist/aos.css";
// // import Script from 'next/script';
// // import { usePathname } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import "@/assets/css/tolak.css";
// // import "@/assets/css/tolak-dark.css";

// // export default function HomeLayout({ children }) {
// //   const pathname = usePathname();
// //   const [themeState, setThemeState] = useState("light");

// //   // Theme handling
// //   useEffect(() => {
// //     if (pathname === "/-dark" || pathname === "/home2-dark" || 
// //         pathname === "/home3-dark" || pathname === "/home4-dark") {
// //       setThemeState("dark");
// //     } else {
// //       setThemeState("light");
// //     }
// //   }, [pathname]);

// //   // Track page views
// //   useEffect(() => {
// //     const handleRouteChange = () => {
// //       console.log('Page changed to:', pathname);
// //       if (typeof window !== 'undefined' && window.gtag) {
// //         window.gtag('config', 'G-F22MLNCZ7T', {
// //           page_path: pathname,
// //           page_location: window.location.href,
// //         });
// //         window.gtag('config', 'AW-16761372846', {
// //           page_path: pathname,
// //           page_location: window.location.href,
// //         });
// //         console.log('Analytics tracked for:', pathname);
// //       }
// //     };

// //     handleRouteChange();
// //   }, [pathname]);

// //   return (
// //     <html lang='en'>
// //       <head>
// //         <Script 
// //           src="https://www.googletagmanager.com/gtag/js?id=G-F22MLNCZ7T"
// //           strategy="lazyOnload"
// //           onLoad={() => {
// //             console.log('GA Script loaded');
// //             window.dataLayer = window.dataLayer || [];
// //             function gtag(){window.dataLayer.push(arguments);}
// //             gtag('js', new Date());
// //             gtag('config', 'G-F22MLNCZ7T');
// //             gtag('config', 'AW-16761372846');
// //           }}
// //         />
// //       </head>
// //       <body className={`custom- cursor ${
// //         pathname === "/home5" ? 'home5' : 
// //         pathname === "/home5-one" ? 'home5' : 
// //         pathname === "/home6" ? "home6" : 
// //         pathname === "/home6-one" ? "home6" : 
// //         pathname === "/home7" ? 'home7' : 
// //         pathname === "/home7-one" ? 'home7' : 
// //         pathname === "/home-boxed" ? "boxed-wrapper" : ''
// //       } ${themeState}`}>
// //         <ThemeProvider>{children}</ThemeProvider>
// //       </body>
// //     </html>
// //   );
// // }
// 'use client'

// import "@fontsource/rubik/latin.css";
// import "@fontsource/raleway/latin.css";
// import "@fontsource/red-hat-text/latin.css";
// import "@fontsource/barlow/latin.css";
// import "@fontsource/heebo/latin.css";
// import "@fontsource/open-sans/latin.css";
// import "@fontsource/mukta/latin.css";
// import "@/assets/vendors/tolak-icons/style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "tiny-slider/dist/tiny-slider.css";
// import "react-circular-progressbar/dist/styles.css";
// import "@/assets/vendors/animate/animate.min.css";
// import "@/assets/vendors/fontawesome/css/all.min.css";
// import "@/assets/vendors/icofont/icofont.min.css";
// import "@/assets/vendors/tolak-icons-two/style.css";
// import ThemeProvider from "@/Provider/ThemeProvider";
// import "aos/dist/aos.css";
// import Script from 'next/script';
// import "@/assets/css/tolak.css";
// import "@/assets/css/tolak-dark.css";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function HomeLayout({ children }) {
//   const pathname = usePathname();
//   const [themeState, setThemeState] = useState("light");

//   useEffect(() => {
//     if (pathname === "/-dark" || pathname === "/home2-dark" || pathname === "/home3-dark" || pathname === "/home4-dark") {
//       setThemeState("dark");
//     } else {
//       setThemeState("light");
//     }
//   }, [pathname]);

//   // Track page views
//   useEffect(() => {
//     if (typeof window !== 'undefined' && window.gtag) {
//       console.log('Tracking page view:', pathname);
//       window.gtag('config', 'G-F22MLNCZ7T', {
//         page_path: pathname,
//       });
//       window.gtag('config', 'AW-16761372846', {
//         page_path: pathname,
//       });
//     }
//   }, [pathname]);

//   return (
//     <html lang='en'>
//       <head>
//         {/* Single Google Analytics Script */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-F22MLNCZ7T"
//           strategy="afterInteractive"
//           onLoad={() => {
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){window.dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-F22MLNCZ7T', {
//               page_path: pathname,
//             });
//             gtag('config', 'AW-16761372846', {
//               page_path: pathname,
//             });
//             console.log('Analytics script loaded in home layout');
//           }}
//         />
//       </head>
//       <body className={`custom- cursor ${pathname === "/home5" ? 'home5' : pathname === "/home5-one" ? 'home5' : pathname === "/home6" ? "home6" : pathname === "/home6-one" ? "home6" : pathname === "/home7" ? 'home7' : pathname === "/home7-one" ? 'home7' : pathname === "/home-boxed" ? "boxed-wrapper" : ''} ${themeState}`}>
//         <ThemeProvider>{children}</ThemeProvider>
//       </body>
//     </html>
//   );
// }
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
import Script from 'next/script';
import Head from 'next/head';
import "@/assets/css/tolak.css";
import "@/assets/css/tolak-dark.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  // Add page tracking
  useEffect(() => {
    console.log('Home Layout - Current Path:', pathname);
  }, [pathname]);

  const onGALoad = () => {
    console.log('Home Layout - Google Analytics Script Loaded');
  };

  const onAdsLoad = () => {
    console.log('Home Layout - Google Ads Script Loaded');
  };

  return (
    <html lang='en'>
      <Head>
      </Head>
      {/* Google Analytics Script */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-F22MLNCZ7T`}
        strategy="afterInteractive"
        onLoad={onGALoad}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F22MLNCZ7T', {
              page_path: '${pathname}',
              debug_mode: true
            });
            console.log('Home Layout - GA Script Initialized');
          `}
      </Script>

      {/* Google Ads Script */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=AW-16761372846`}
        strategy="afterInteractive"
        onLoad={onAdsLoad}
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16761372846', {
              page_path: '${pathname}',
              debug_mode: true
            });
            console.log('Home Layout - Ads Script Initialized');
          `}
      </Script>

      <body className={`custom- cursor ${pathname === "/home5" ? 'home5' : pathname === "/home5-one" ? 'home5' : pathname === "/home6" ? "home6" : pathname === "/home6-one" ? "home6" : pathname === "/home7" ? 'home7' : pathname === "/home7-one" ? 'home7' : pathname === "/home-boxed" ? "boxed-wrapper" : ''} ${themeState}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}