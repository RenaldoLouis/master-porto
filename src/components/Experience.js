import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Fade } from "react-reveal";
import Badge from "react-bootstrap/Badge";
import ExperienceCard from "../components/ExperienceCard";

const Experience = (data) => {
    // console.log(data);
    // console.log(data.resumeExperience);
    // console.log(data.resumeBasicInfo);
    let sectionName = data.resumeBasicInfo.section_name.experience
    var work = data.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
            return (
                <Badge pill className="main-badge mr-2 mb-2" key={i}>
                    {technology}
                </Badge>
            );
        });
        var tech = technologies.map((technology, i) => {
            return (
                <Badge pill className="experience-badge mr-2 mb-2" key={i}>
                    {technology}
                </Badge>
            );
        });
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element"
                date={work.years}
                iconStyle={{
                    background: "#AE944F",
                    color: "#fff",
                    textAlign: "center",
                }}
                icon={<i className="fab fa-angular experience-icon"></i>}
                key={i}
            >
                <div style={{ textAlign: "left", marginBottom: "4px" }}>
                    {mainTech}
                </div>

                <h3
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                >
                    {work.title}
                </h3>
                <h4
                    className="vertical-timeline-element-subtitle"
                    style={{ textAlign: "left" }}
                >
                    {work.company}
                </h4>
                <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
            </VerticalTimelineElement>
        );
    });
    return (
        <section className="section section-lg background-color-blue">
            <Container>
                <Fade bottom duration={1000} distance="40px">
                    <div className="d-flex p-4">
                        <div>
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                                <i className="ni ni-briefcase-24 text-info" />
                            </div>
                        </div>
                        <div className="pl-4">
                            <h4 className="display-3 text-info">Experience</h4>
                        </div>
                    </div>
                    <Row className="row-grid align-items-center">
                        {/* {experience.map((data, i) => {
                        return <ExperienceCard key={i} data={data} />;
                    })} */}
                        <section id="resume">
                            {/* <div className="col-md-12 mx-auto">
                                <div className="col-md-12">
                                    <h1 className="section-title" style={{ color: "black" }}>
                                        <span className="text-black" style={{ textAlign: "center" }}>
                                            {sectionName}
                                        </span>
                                    </h1>
                                </div>
                            </div> */}
                            <div className="col-md-12 mx-auto">
                                <VerticalTimeline>
                                    {work}
                                    <VerticalTimelineElement
                                        iconStyle={{
                                            background: "#AE944F",
                                            color: "#fff",
                                            textAlign: "center",
                                        }}
                                        icon={
                                            <i className="fas fa-hourglass-start mx-auto experience-icon experience-icon"></i>
                                        }
                                    />
                                </VerticalTimeline>
                            </div>
                        </section>
                    </Row>
                </Fade>
            </Container>
        </section>
    );
};

export default Experience;
