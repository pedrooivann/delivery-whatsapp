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

    async function handleCreateOrder(
        id_client,
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

            setOrders((prev)=>[...prev, newOrder.order]);

        } catch (e) {
            console.error(e)
        }
    }

    async function handleDeleteOrder (id) {
        try {
            await deleteOrder(id)
            setOrders((prev)=>prev.filter((order)=> order.id !== id));

        } catch (e) {
            console.log(e)
        }
    }

    async function handleUpdateOrderAddress (
        id, 
        delivery_address, 
        delivery_neighborhood, 
        delivery_reference
    ){
        try {
            const updatedAddress = await updateOrderAddress(
                id, 
                delivery_address, 
                delivery_neighborhood, 
                delivery_reference
            )

            setOrders(prev=> prev.map(order => order.id === id? updatedAddress.order : order))

        } catch (e) {
            console.error(e)
        }
    }

    async function handleUpdateOrderNotes (id, notes){
        try {
            const updatedNotes = await updateOrderNotes(id, notes);

            setOrders(prev => prev.map(order=> order.id === id? updatedNotes.order : order))
        
        } catch (e) {
            console.error(e);    
        }
    }

    async function handleUpdateOrderStatus (id, order_status){
        try {
            const updatedStatus = await updateOrderStatus(id, order_status)

            setOrders(prev => prev.map(order=> order.id === updatedNotes.id? updatedNotes.order : order))
        } catch (e) {
            console.error(e)
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

                        <OrderList
                            orders={orders}/>

                        </div>
                </div>
        
            </div>
        </>

    );
}

export default Orders;