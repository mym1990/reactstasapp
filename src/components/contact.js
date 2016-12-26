import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaGithub from 'react-icons/lib/fa/github-square';


const Contact = () => {
        return(
            <div>
                <Row>
                    <Col className="homeRow" xs={12} md={12}>
                        <Row>
                        </Row>
                        <Row className="contactRow">
                            <Col className="colIcon" xs={12} md={6} lg={4}>
                                <LinkedIn className="icon" size={60} color='black' />
                            </Col>
                            <Col className="colIcon" xs={12} md={6} lg={4}>
                                <FaInstagram className="icon" size={60} color='black' />
                            </Col>
                            <Col className="colIcon" xs={12} md={6} lg={4}>
                                <FaGithub className="icon" size={60} color='black' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
};

export default Contact;


