import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import vehicles from '../../Data/Data.json';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Destination.css';

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
                                <input type='text'
                                    className='form-control' placeholder='From'
                                    name='from' onBlur={handleBlur}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputPassword1'>
                                    Pick To
                                </label>
                                <input type='text'
                                    className='form-control' placeholder='To'
                                    name='to' onBlur={handleBlur}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputPassword1'>
                                    Date
                                </label>
                                <input type='date'
                                    className='form-control' placeholder='To'
                                    name='date' onBlur={handleBlur}
                                />
                            </div>
                            <button onClick={searchHandler} className = 'btn btn-warning'>Search</button>
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
                                    <div className='col-lg-3'>
                                        <img
                                            className='w-100'
                                            src={transport.image}
                                            alt='...'
                                        />
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                {transport.transport}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                {transport.capacity}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
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
                <iframe title="Bus station map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.677637308184!2d90.4112999143479!3d23.723203195732996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85639be9913%3A0xd40ae6820dc9edb4!2sBRTC%20Bus%20Counter!5e0!3m2!1sen!2sbd!4v1616191951814!5m2!1sen!2sbd"  width="700" height="500" allowFullscreen = 'true' border = '0'></iframe>
            
                </div>
            </div>
        </div>
    );
};
export default Destination;
