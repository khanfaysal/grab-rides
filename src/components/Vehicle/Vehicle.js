import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import vehicles from '../../Data/Data.json';

const Vehicles = (props) => {
    const { id, transport, image } = props.vehicle;

    return (
        <div className='col-lg-3 mt-5'>
            <div className='card text-center bg-dark'>
                <Link to={`/destination/${id}`}>
                    <div className='card-body'>
                        <img className='w-100' src={image} alt={transport}/>
                        <h5 className='card-title font-weight-bold'>
                            {transport}
                        </h5>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Vehicles;
