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
                   
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7441965257035!2d90.3839348143478!3d23.720827295823646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8d977289695%3A0x4a58b26e452802d5!2sLalbagh%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616190811020!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                 
                </Col>
            </Row>
      </Container>
    );
};

export default DestinationSearch;