import React from 'react'
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap'

function SignIn() {
    return (
        <Container>
            <Row>
                <Col>
                    <img className="img-responsive d-block p-3" src="https://rukminim1.flixcart.com/image/416/416/kvcpn680/poster/q/r/5/small-yellow-grey-aesthetic-for-wall-collage-50-5pcs-104-original-imag89hxgkcgzdvy.jpeg?q=70" alt="..."/>
                </Col>
                <Col>
                    <h1 alignItems='center'>Sign In</h1>
                    <Form className="p-5">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="********" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn;