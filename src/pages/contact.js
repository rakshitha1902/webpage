import React from 'react'
import{Container, Row, Col} from 'react-bootstrap'

function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <img src='https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000__480.jpg' alt=""/>
                </Col>
                <Col>
                    <form border="light" class='p-5'>
                        <h1 class="text-center">CONTACT US</h1>
                        <br></br>
                        <div class="form-group p-3">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="form-group p-3">
                            <label for="exampleFormControlTextarea1">Write to us</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;