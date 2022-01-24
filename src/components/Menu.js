import React, { useState, useEffect } from "react";


export default function Menu({ menuOpen, setMenuOpen }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    let isMobile = width <= 991;

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    function handleWindowHeightSizeChange() {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        window.addEventListener("resize", handleWindowHeightSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
            window.removeEventListener("resize", handleWindowHeightSizeChange);
        };
    }, [isMobile, height]);
    return (
        <div className={"menu " + (menuOpen && "active")} style={{ display: isMobile ? "none" : "" }}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}
