import React from 'react';
import {Container,Row,Col,Form} from 'react-bootstrap';

const DestinationSearch = () => {
    return (
        <Container>
            <Row>
                <Col>

                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>

                </Col>
                {/* <Col xs={6}>2 of 3 (wider)</Col> */}
                <Col md={8}>
                   <p>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.677637308184!2d90.4112999143479!3d23.723203195732996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85639be9913%3A0xd40ae6820dc9edb4!2sBRTC%20Bus%20Counter!5e0!3m2!1sen!2sbd!4v1616191951814!5m2!1sen!2sbd" width="60" height="45" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                   </p>
                 
                </Col>
            </Row>
      </Container>
    );
};

export default DestinationSearch;