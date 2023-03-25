import React, {useState} from "react";
import {Card, Col, Row, Container} from "reactstrap";

// import SocialLinks from "../components/SocialLinks";
// import Image from "next/image";

const Footer = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };
    return (
        <Card className="section-lg bg-gradient-info shadow-lg border-0">
            <Container className="">
                <div className="p-2">
                    <Row className="">
                        <Col className="order-lg-2" lg="4">
                            <img
                                src="./profile.jpeg"
                                style={{width: "200px"}}
                                alt=""
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                            />
                        </Col>
                        <Col lg="8" className="order-lg-1">
                            <h2 className="text-white">Reach Out to me!</h2>
                            <p className="lead text-white mt-3">
                                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY
                                INBOX IS OPEN FOR ALL
                            </p>
                            <p className="text-white mt-3">"I'm a Full Stack Web Developer | Mobile App Developer"</p>
                            <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                                <i className="ni ni-pin-3 text-info mr-2" />
                                "Tangerang, Indonesia"
                            </div>
                            <div className="contact" id="contact">
                                <div className="right">
                                    <h2 style={{color: "#fff"}}>Contact.</h2>
                                    {/* "mailto:manish@simplygraphix.com?subject=Feedback for 
                                    webdevelopersnotes.com&body=The Tips and Tricks section is great
                                    &cc=anotheremailaddress@anotherdomain.com
                                    &bcc=onemore@anotherdomain.com" */}
                                    <form action="mailto:renaldolouis555@gmail.com?subject=Customer Data"
                                        method="POST"
                                        enctype="text/plain"
                                        name="EmailForm"
                                        style={{display: "grid"}}
                                    >
                                        <input style={{marginBottom: "10px"}} type="text" placeholder="Email" name="Email" />
                                        <textarea style={{marginBottom: "10px"}} type="text" placeholder="Message" name="Message"></textarea>
                                        <button type="submit" value="Send">Send</button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Card>
    );
};

export default Footer;
