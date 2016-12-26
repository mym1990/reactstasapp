import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';



class Nav extends React.Component {
    render() {
        return(
            <div>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/photography">Photography</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </Col>
                    </Row>
                {this.props.children}
            </div>
        )
    }
}
export default Nav;
