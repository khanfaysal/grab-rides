import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import map from '../../assets/Map.png';
import vehicles from '../../Data/Data.json';

const Destination = () => {
    const [location, setLocation] = useState({
        from: '',
        to: '',
        date: ''
    })
    const handleBlur = (event) => {
        console.log(event.target.name, event.target.value);
        if (event.target.name === 'from') {
            location.from = event.target.value;
        }
        if (event.target.name === 'to') {
            location.to = event.target.value;
        }
        if (event.target.name === 'date') {
            location.date = event.target.value;
        }
    };

    const [click, setClick] = useState(false);
    const searchHandler = (event) => {
        console.log('clicked');
        setClick(!click);
        event.preventDefault();
    };

    const { id } = useParams();
    const [transport, setTransportInfo] = useState({});
    useEffect(() => {
        const info = vehicles.filter((type) => id == type.id);
        setTransportInfo(info[0]);
        console.log(info[0]);
    }, [id]);

    return (
        <div className='container'>
            <hr />
            <div className='row'>
                <div className='col'>
                    {!click ? (
                        <form>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>
                                    Pick From
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='From'
                                    name='from'
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputPassword1'>
                                    Pick To
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='To'
                                    name='to'
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputPassword1'>
                                    Date
                                </label>
                                <input
                                    type='date'
                                    className='form-control'
                                    placeholder='To'
                                    name='date'
                                    onBlur={handleBlur}
                                />
                            </div>
                            <button onClick={searchHandler}>Search</button>
                        </form>
                    ) : (
                        <div>
                            <div>
                                <h3>From: {location.from}</h3>
                                <h3>To: {location.to}</h3>
                                <h4>Date: {location.date}</h4>
                            </div>
                            <div className='card mb-3'>
                                <div className='row no-gutters'>
                                    <div className='col-md-4'>
                                        <img
                                            className='w-100'
                                            src={transport.image}
                                            alt='...'
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                {transport.transport}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                ${transport.rent}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='col'>
                    <img src={map} alt='Google Map' />
                </div>
            </div>
        </div>
    );
};

export default Destination;
