import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';

const Home = () => {
        return (
            <div className="row">
                <div className="container-fluid text-center">
                    {/*<div className=" row descriptionRow"><h3>Front end developer and photographer currently residing in Nashville, TN. Occasionally traveling the world.</h3></div>*/}

                    <div className="row projects">
                        <Link to="/about"><Col xs={12} sm={6} md={6} lg={6}>
                            <h2>Hello, World!</h2>
                            <p>A bit about me.</p>
                        </Col></Link>
                        <Link to="/projects"><Col xs={12} sm={6} md={6} lg={6}>
                            <h2>Projects</h2>
                        </Col></Link>
                        <Link to="/photography"><Col xs={12} sm={6} md={6} lg={8}>
                            <h2>Photography</h2>
                        </Col></Link>
                        <Link to="/readinglist"><Col xs={12} sm={6} md={6} lg={4}>
                            <h2>Reading List</h2>
                        </Col></Link>
                        <a href="https://www.linkedin.com"><Col xs={12} sm={6} md={6} lg={4}>
                            <h2>LinkedIn</h2>
                        </Col></a>
                        <a href="https://www.instagram.com/staschristiansen/"><Col xs={12} sm={6} md={6} lg={4}>
                            <h2>Instagram</h2>
                        </Col></a>
                        <a href="https://github.com/mym1990"><Col xs={12} sm={6} md={6} lg={4}>
                            <h2>GitHub</h2>
                        </Col></a>
                        {/*<Link to="/contact"><Col xs={12} sm={6} md={6} lg={12}>*/}
                            {/*<h2>Contact</h2>*/}
                        {/*</Col></Link>*/}
                    </div>
                </div>
            </div>
          )
};

export default Home;

