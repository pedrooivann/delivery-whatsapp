import {
    getOrders,
    getOrder,
    createOrder,
    deleteOrder,
    updateOrderStatus,
    updateOrderAddress
} from '../services/order.service.js'

export async function getOrdersController (req, res) {

    try{
        const orders = await getOrders();

        if(!orders) return res.status(404).json({message: "Orders not found!"});

        return res.status(200).json(orders);
    }catch(error){
        return res.status(500).json({
            error: "Nigga",
            details: error.message});
    };
};

export async function getOrderController (req, res) {
    const id = req.params.id;

    try{
        const order = await getOrder(id);

        if(!order) return res.status(404).json(order);
    }catch(error){
        return res.status(500).json({
            error: "Error on getting Order",
            details: error.message});
    };
};

export async function createOrderController (req, res) {
    
};