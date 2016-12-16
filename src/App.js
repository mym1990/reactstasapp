import React from 'react';
import _ from 'lodash';
// import Navigation from './components/nav';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Home from 'react-icons/lib/fa/home';
import Camera from 'react-icons/lib/fa/camera';

class App extends React.Component {
    render() {
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col className="navigation" sm={6} md={6}>Stanislav Christiansen</Col>
                        <Col className="navigation" sm={6} md={6}>
                            <ul>
                                <li><a href="default.asp">Home</a></li>
                                <li><a href="news.asp">News</a></li>
                                <li><a href="contact.asp">Contact</a></li>
                                <li><a href="about.asp">About</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
};

export default App;
