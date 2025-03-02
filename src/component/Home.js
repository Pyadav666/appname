import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import proFile from '../asset/images/young-man.jpg'
import matchersStandalone from "@testing-library/jest-dom/matchers";

const Home = () => {
    return (
        <Container fluid className="bg-dark">
            {/* Hero Section */}
            <Row className="align-items-center text-center py-5 bg-primary text-white" style={{
                height: "100vh", backgroundImage: "url('https://img.freepik.com/free-photo/wireless-keyboard-cup-coffee-table_140725-8935.jpg?t=st=1740898115~exp=1740901715~hmac=10dd55bdbf9de275ed42000a808cba9804ec54cfeb5515e37ff0ce91e5bd2e23&w=1060')",
                backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
            }}>
                <Col>
                    <h1 className="display-4 fw-bold">Hello, I'm Pravin Yadav</h1>
                    <p className="lead">A Passionate Your Profession</p>
                    <Button variant="light" size="lg" href="#portfolio">
                        View My Work
                    </Button>
                </Col>
            </Row>

            {/* About Section */}
            <Row className="py-5 hero-content">
                <Col md={6} className="text-center firstcol">
                    <img src={proFile} alt="Profile"
                        className="img-fluid rounded-circle"
                    />
                </Col>
                <Col md={6} className="d-flex align-items-center">
                    <div>
                        <h2>About Me</h2>
                        <p>
                            I am a [Your Profession] with experience in [Technologies]. I enjoy building
                            solutions that make an impact.
                        </p>
                    </div>
                </Col>
            </Row>

            {/* Portfolio Section */}
            <Row className="py-5 bg-light" id="portfolio">
                <h2 className="text-center mb-4">My Projects</h2>
                <Col md={4} className="mb-4">
                    <div className="p-3 bg-white shadow rounded">
                        <h3>Project One</h3>
                        <p>A short description of this project.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="p-3 bg-white shadow rounded">
                        <h3>Project Two</h3>
                        <p>A short description of this project.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="p-3 bg-white shadow rounded">
                        <h3>Project Three</h3>
                        <p>A short description of this project.</p>
                    </div>
                </Col>
            </Row>

            {/* Footer */}
            <Row className="py-3 text-center bg-dark text-white">
                <Col>
                    <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
