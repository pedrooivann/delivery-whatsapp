import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import OrderSearchBar from "../../components/Orders/OrderSearchBar/OrderSearchBar";
import OrderList from "../../components/Orders/OrderList/OrderList.jsx"

import {
    getOrder,
    getOrders,
    createOrder,
    deleteOrder,
    updateOrderAddress,
    updateOrderNotes,
    updateOrderStatus
} from './../../services/orderService.js';


import { useState, useEffect } from "react";


function Orders (){

    const [orders, setOrders] = useState([]);

    console.log(orders)

    useEffect(()=>{
        async function loadOrders (){
            try {
                const data = await getOrders()
                setOrders(data.orders)
            } catch (e) {
                console.error(e)
            }
        }
        loadOrders()
    }, [])

    async function handleCreateorder(id_client,
        order_origin,
        delivery_address,
        payment_method,
        notes,
        delivery_neighborhood,
        delivery_reference){
        try {
            const newOrder = await createOrder(
                id_client,
                order_origin,
                delivery_address,
                payment_method,
                notes,
                delivery_neighborhood,
                delivery_reference
            )

            setOrders((prev)=>[...prev, newOrder]);

        } catch (e) {
            console.error(e)
        }
    }

    async function handleDeleteOrder (id) {
        try {
            const deleted = await deleteOrder(id)

            setOrders((prev)=>prev.filter(order)=> order.id !== id);

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>  
            <div className="outer-layout">
                <Header/>

                    <div className="layout">
                        <Sidebar/>

                        <div className="content-section">
                            <OrderSearchBar/>

                        <hr className="content-section-main-hr"/>

                        <OrderList/>

                        </div>
                </div>
        
            </div>
        </>

    );
}

export default Orders;