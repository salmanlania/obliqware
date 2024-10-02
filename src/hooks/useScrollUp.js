'use client'
import { useCallback, useEffect, useState, useRef } from "react";

const useScrollUp = (scrollSize = 0) => {
    const [scrollTop, setScrollTop] = useState(false);
    const lastScrollTop = useRef(0);

    const handleSet = useCallback(() => {
        const currentScrollTop = window.scrollY;

        if (currentScrollTop > scrollSize) {
            if (currentScrollTop > lastScrollTop.current) {

                setScrollTop(false);
            } else {

                setScrollTop(true);
            }
        } else {
            setScrollTop(false);
        }

        lastScrollTop.current = currentScrollTop;

    }, [scrollSize]);

    useEffect(() => {
        window.addEventListener("scroll", handleSet);

        return () => window.removeEventListener("scroll", handleSet);
    }, [handleSet]);

    return scrollTop;
};

export default useScrollUp;
