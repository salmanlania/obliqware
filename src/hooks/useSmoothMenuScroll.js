"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useSmoothMenuScroll = () => {
    const pathname = usePathname();

    useEffect(() => {
        const handleClick = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = window.scrollY > 10 ? 0 : 0;

                window.scrollTo({
                    top: targetElement.offsetTop - offsetTop,
                    behavior: "smooth",
                });


                document.querySelectorAll(".scrollToLink").forEach((link) => {
                    link.classList.remove("current");
                });


                event.currentTarget.parentElement.classList.add("current");
            }
        };

        const links = document.querySelectorAll(".scrollToLink a");

        links.forEach((link) => link.addEventListener("click", handleClick));

        return () => {
            links.forEach((link) => link.removeEventListener("click", handleClick));
        };
    }, [pathname]);
};

export default useSmoothMenuScroll;
