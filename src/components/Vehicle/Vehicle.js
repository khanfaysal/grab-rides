
import { Link } from 'react-router-dom';
import './Vehicle.css'


const Vehicles = (props) => {
    const { id, transport, image } = props.vehicle;
    return (
        <div className='col-lg-3 card-area shadow p-3 mb-5 bg-body rounded'>
            <div className='card text-center bg-dark'>
                <Link to = {`/destination/${id}`}>
                    <div className='card-body'>
                        <img className='w-100' src={image} alt={transport}/>
                        <h5 className='card-title font-weight-bold text-warning'>
                            {transport}
                        </h5>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default Vehicles;
