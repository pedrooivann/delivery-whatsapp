import { orderStatus } from '../../../../../backend/src/models/Order.js';
import OrderCard from './../OrderCard/OrderCard.jsx'
import './OrderList.css'

function OrderList ({orders}){

    const orderColumns = [
        {title: "New", status: orderStatus.NEW},
        {title: "Confirmed", status: orderStatus.CONFIRMED},
        {title: "Prepating", status: orderStatus.PREPARING},
        {title: "Ready", status: orderStatus.READY},
        {title: "On delivery", status: orderStatus.OUT_FOR_DELIVERY},
    ]

    const history = [
        {title: "Canceled", status: orderStatus.CANCELED},
        {title: "Delivered", status: orderStatus.DELIVERED}
    ]

    return(<>
    
    <div 
        className="orders-board"
        onWheel={(e) => {
            e.currentTarget.scrollLeft += e.deltaY;
        }}>
        {orderColumns.map(column => (
            
                <div className="order-column" key={column.status}>
                    <h3>{column.title}</h3>
                    {orders
                    .filter(order=> order.order_status === column.status)
                    .map(order=>(
                        <OrderCard order={order} key={order.id}/>
                    ))}
                </div>
        ))}

    </div>
    </>)
}

export default OrderList