import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './VehicleCard.css';

const VehicleCard = (props) => {
    const {image , transport} = props.card;
    return (
    
        <Col className = 'mt-5 ' xs={6} md={4}>
            <Card className = 'text-center'  style={{ width: '18rem'}}>
                <Card.Img variant="top" ClassName="img-responsive" src={image} fluid/>
                <Card.Body>
                    <Card.Title>{transport}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
       
    );
};

export default VehicleCard;