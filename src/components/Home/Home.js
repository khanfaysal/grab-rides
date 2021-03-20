import React, { useEffect, useState } from 'react';
import './Home.css';
import vehicleDatabase from '../vehicleDatabase/vehicleData.json';
import VehicleCard from '../VehicleCard/VehicleCard.js';
import {Container, Row } from 'react-bootstrap';


const Home = () => {
    const [cardDetails , setCardDetails] = useState([]);
    useEffect(() => {
        setCardDetails(vehicleDatabase);

    },[])
    return (  
            <Container>
              <Row >
                 {
                    cardDetails.map((card, key) => <VehicleCard card ={card} key={key}></VehicleCard>)
                 }
              </Row>
          </Container>
    );
};

export default Home;