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


import "@/assets/css/tolak-rtl.css";
import "@/assets/css/tolak-custom-rtl.css";
import "@/assets/vendors/tolak-toolbar/css/tolak-toolbar.css";

export default function RootLayout({ children }) {


  return (
    <html lang='en'>
      <body className="custom-cursor">
        <ThemeProvider>{children}</ThemeProvider>
      </body>

    </html >
  );
}
