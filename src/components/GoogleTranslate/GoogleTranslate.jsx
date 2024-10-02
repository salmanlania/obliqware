"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Cookies from "js-cookie";

const GoogleTranslate = ({ lang }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);



  // Define Google Translate init function
  const googleTranslateElementInit = () => {
    if (typeof window.google !== "undefined") {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "auto",
        },
        "google_translate_element"
      );
    }
  };

  useEffect(() => {

    if (typeof window !== "undefined") {
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, [isScriptLoaded]);




  useEffect(() => {
    if (isScriptLoaded) {
      const changeLanguage = (value) => {
        setTimeout(() => {
          const element = document.querySelector(".goog-te-combo");
          console.log(element);
          if (element) {
            element.value = value;
            element.dispatchEvent(new Event("change"));
          }

        }, 500);


      };
      setTimeout(() => {
        changeLanguage(lang);

      }, 500)


    }
  }, [isScriptLoaded]);

  return (
    <div>
      <div id="google_translate_element"></div>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
    </div>
  );
};

export default GoogleTranslate;
