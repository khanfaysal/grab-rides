import React from 'react';
import {Container,Row,Col,Card,ListGroup} from 'react-bootstrap';
import './DestinationVehicle';


const DestinationVehicle = () => {
    return (
        <Container>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Header variant ='danger'>Featured</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                <Col md={8}>
                 <div className = 'map-area'>
                
                   <iframe title="Bus station map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.677637308184!2d90.4112999143479!3d23.723203195732996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85639be9913%3A0xd40ae6820dc9edb4!2sBRTC%20Bus%20Counter!5e0!3m2!1sen!2sbd!4v1616191951814!5m2!1sen!2sbd" loading="lazy" width="800" height="500" allowFullscreen = 'true' border = '0'></iframe>
                  
                 </div>
                </Col>
            </Row>
      </Container>
    );
};

export default DestinationVehicle;