import React, { useEffect, useState } from 'react';
import vehicles from '../../Data/Data.json';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css';

const Home = () => {
    const [ride, setRide] = useState([]);
    useEffect(() => {
        setRide(vehicles);
    }, []);
    return (
        <div className='background-img'>
            <div className='container my-3'>
                <div className='row'>
                    {ride.map((vehicle) => (
                        <Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Home;
