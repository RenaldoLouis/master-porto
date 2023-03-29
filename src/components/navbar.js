import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";

import {socialLinks} from "../portfolio.js";
// import Headroom from "headroom.js";
// import Link from "next/link";
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";

function Navigation({
    menuOpen,
    setMenuOpen
}) {
    const [collapseClasses, setCollapseClasses] = useState("");
    const [scrollValue, setScrollValue] = useState("");
    const onExiting = () => setCollapseClasses("collapsing-out");

    const onExited = () => setCollapseClasses("");

    // useEffect(() => {
    //     let headroom = new Headroom(document.getElementById("navbar-main"));
    //     // initialise
    //     headroom.init();
    // });

    var lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    document.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
            // downscroll code
            setScrollValue(st)
        } else {
            // upscroll code
            setScrollValue(st)
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

    return (
        <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
            style={{position: "fixed", backgroundColor: scrollValue > 0 ? "#FFB042" : null}}
        >
            <Container>
                <NavbarBrand href="/" className="mr-lg-5">
                    <h2 className="text-white copyright" id="nav-title" style={{fontSize: 15}}>
                        Renaldo
                    </h2>
                </NavbarBrand>
                <button
                    className="navbar-toggler"
                    aria-label="navbar_toggle"
                    id="navbar_global"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <UncontrolledCollapse
                    toggler="#navbar_global"
                    navbar
                    className={collapseClasses}
                    onExiting={onExiting}
                    onExited={onExited}
                >
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="10">
                                <h3
                                    className="text-black"
                                    id="nav-title"
                                >
                                    Renaldo
                                </h3>
                            </Col>
                            <Col className="collapse-close" xs="2">
                                <button
                                    className="navbar-toggler"
                                    id="navbar_global"
                                >
                                    <span />
                                    <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav
                        className="align-items-lg-center ml-lg-auto"
                        navbar
                    >
                        {/* <NavItem>
                                    <NavLink
                                        rel="noopener"
                                        aria-label="Facebook"
                                        className="nav-link-icon"
                                        href={socialLinks.facebook}
                                        target="_blank"
                                    >
                                        <i className="fa fa-facebook-square" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Facebook
                                        </span>
                                    </NavLink>
                                </NavItem> */}
                        <NavItem>
                            <NavLink
                                rel="noopener"
                                aria-label="Instagram"
                                className="nav-link-icon"
                                href={socialLinks.instagram}
                                target="_blank"
                            >
                                <i className="fa fa-instagram" />
                                <span className="nav-link-inner--text d-lg-none ml-2">
                                    Instagram
                                </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                rel="noopener"
                                aria-label="Twitter"
                                className="nav-link-icon"
                                href={socialLinks.twitter}
                                target="_blank"
                            >
                                <i className="fa fa-twitter-square" />
                                <span className="nav-link-inner--text d-lg-none ml-2">
                                    Twitter
                                </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                rel="noopener"
                                aria-label="Github"
                                className="nav-link-icon"
                                href={socialLinks.github}
                                target="_blank"
                            >
                                <i className="fa fa-github" />
                                <span className="nav-link-inner--text d-lg-none ml-2">
                                    Github
                                </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                rel="noopener"
                                aria-label="Linkedin"
                                className="nav-link-icon"
                                href={socialLinks.linkedin}
                                target="_blank"
                            >
                                <i className="fa fa-linkedin" />
                                <span className="nav-link-inner--text d-lg-none ml-2">
                                    Linkedin
                                </span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {/* <div className={"topbar " + (menuOpen && "active")}>
                                <div className="wrapper">
                                    <div className="right">
                                        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                                            <span className="line1"></span>
                                            <span className="line2"></span>
                                            <span className="line3"></span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                </UncontrolledCollapse>

            </Container>
        </Navbar>
    );
};

export default Navigation;
