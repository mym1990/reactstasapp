import React from 'react';
import { Row, Col } from 'react-bootstrap';

class SubheaderTwo extends React.Component {
    render() {
        return(
            <Row>
                <Col className="container">
                    <Row className="descriptionRow"><h3>Front end developer and photographer currently residing in Nashville, TN. Occasionally traveling the world.</h3></Row>

                    <Row className="projects">
                        <Col xs={6} md={6} lg={4}>

                        </Col>
                        <Col xs={6} md={6} lg={4}>

                        </Col>
                        <Col xs={6} md={6} lg={4}>
                        </Col>

                        <Col xs={6} md={6} lg={4}>

                        </Col>
                        <Col xs={6} md={6} lg={4}>

                        </Col>
                        <Col xs={6} md={6} lg={4}>

                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default SubheaderTwo;
