import React from "react";
import { Card } from "react-bootstrap";
import {Container, Row, Col} from 'react-bootstrap'

const About = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img className="img-responsive d-block p-3" src="https://www.it-daily.net/images/Aufmacherbilder/Business-Team-Jung_1086473348-700.jpg" alt=""/>
                </Col>
                <Col className="p-3">
                    <Card border="light">
                        <Card.Body>
                            <Card.Title>About Us</Card.Title>
                                <Card.Text >
                                If you want to create an aesthetic photo collage in your room there’s a few ways to go. You can print off your own pictures with a filter, you can purchase a kit with pre-made pictures that is sent to you, or you can purchase a digital kit and then print them yourself. There are also some kits where you can get custom pictures. Another idea is to mix some of your own and some from a kit. When you hang them, you can use double sided tape, blue tack or use a string and some clothespins. The fun part is you can arrange them however you want. I’ll show you all of this plus, the best kits for every style.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        
        </Container>
    );
};

export default About;