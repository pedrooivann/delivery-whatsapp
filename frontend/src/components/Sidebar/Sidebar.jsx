import './Sidebar.css';
import {Link} from 'react-router-dom';

function Sidebar (){

    return (

        <div className='sidebar dark'> 

            <aside>
                <Link to="/orders">
                    <button>Orders</button>
                </Link>

                <Link to="/products">
                    <button>Products</button>
                </Link>

                <Link to="/clients">
                    <button>Clients</button>
                </Link>
            </aside>
        </div>

    )
};

export default Sidebar;