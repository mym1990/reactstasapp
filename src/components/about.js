import React from 'react';
import { Row, Col } from 'react-bootstrap';

const About = () => {
        return (
            <div>
                    <Row>
                            <Col className="homeRow" xs={12} md={12}>
                                    <Row className="">
                                            <Col xs={8} md={8} lg={8}>
                                                    <p>Greetings, traveller! I am presuming you stumbled into this section in the hopes of learning a bit more about who I am...
                                                    and it seems that I have no choice but to oblige. </p>

                                                    <p>The name is Stas. Or Stanislav. Or Sauce. To tell you the truth, I've come to be accustom to any name that starts with an S and an A in it somewhere.
                                                    I was born in Russia, specifically Volgograd, and made the umpteen hour flight to America when I was just 8 years old. After arriving in America,
                                                    I had the opportunity to call many places home in the states, but spent most of my years growing up in Atlanta, Georgia.</p>

                                                    <p>I graduated from Georgia State University with a degree in Business Economics, and quickly acknowlegded that what I actually wanted to be doing was developing applications and products
                                                    on the web. After that I attended the General Assembly Web Development Immersive program in the fall of 2015 and began working at Listen360 as a support engineer at the beginning of 2016. In the fall of 2016 I set out
                                                    to begin a new chapter in my life by moving to the beautiful city of Nashville. </p>
                                                    <p>You can now find me doing freelance web development and photography as I search for my next endeavour to undertake! For more information get in touch with me via the Contact page!</p>

                                                    <p></p>
                                            </Col>
                                    </Row>
                            </Col>
                    </Row>
            </div>
        )
};

export default About;
