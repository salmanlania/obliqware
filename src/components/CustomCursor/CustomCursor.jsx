'use client'
import React, { useEffect, useRef, useState } from 'react';


const CustomCursor = () => {

    const cursorRef = useRef(null);
    const cursorTwoRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const links = document.querySelectorAll("a");
        // Event listener for mouse movement
        const handleMouseMove = (e) => {

            setPosition({
                x: e.clientX,
                y: e.clientY
            });

        };


        // const handleMouseDown = () => {
        //     if (cursorRef) cursorRef.current.classList.add("click");
        //     if (cursorTwoRef) cursorTwoRef.current.classList.add("custom-cursor__innerhover");
        // };

        const handleMouseDown = () => {
            if (cursorRef && cursorRef.current) {
                cursorRef.current.classList.add("click");
            }
            if (cursorTwoRef && cursorTwoRef.current) {
                cursorTwoRef.current.classList.add("custom-cursor__innerhover");
            }
        };        

        const handleMouseUp = () => {
            if (cursorRef) cursorRef.current.classList.remove("click");
            if (cursorTwoRef) cursorTwoRef.current.classList.remove("custom-cursor__innerhover");
        };
        // Event listener for mouseover (hover) on HTML elements
        const handleMouseOver = () => {
            if (cursorRef.current) cursorRef.current.classList.add("custom-cursor__hover");
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) cursorRef.current.classList.remove("custom-cursor__hover");
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        links.forEach((item) => {
            item.addEventListener("mouseover", handleMouseOver);
            item.addEventListener("mouseleave", handleMouseLeave);
        });
        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);

            links.forEach((item) => {
                item.removeEventListener("mouseover", handleMouseOver);
                item.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);




    return (

        <>
            <div ref={cursorRef} className="custom-cursor__cursor" style={{ transform: `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0)` }}  ></div >

            <div ref={cursorTwoRef} style={{ top: position.y, left: position.x }} className="custom-cursor__cursor-two"></div>

        </>
    );
};

export default CustomCursor;