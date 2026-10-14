import { 
    getOrderItem,
    getOrderItems,
    createOrderItem,
    deleteOrderItem,
    updateAmount,
} from '../services/order.items.service.js';

export async function getOrderItemController (req, res){
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});

    try {
        const orderItem = await getOrderItem(id);

        if(!orderItem) return res.status(404).json({message: "Order Item not found"})

        return res.status(200).json(orderItem);
    }catch(error){
        console.error("Error on getting Order Item", error);

        return res.status(500).json({
            message: "Error on getting Order Item"})
    };
};

export async function getOrderItemsController (req, res){

    try {
        const orderItems = await getOrderItems();

        return res.status(200).json(orderItems);
    }catch(error){
        console.error("Error getting Order Items:", error);

        return res.status(500).json({
            message: "Error on getting Order Items"})
    };
};

export async function createOrderItemController (req, res){

    const idOrders = Number(req.body.id_orders);
    const idProduct = Number(req.body.id_product);
    const orderItemAmount = Number(req.body.amount);
    
    if(!Number.isInteger(idOrders) || idOrders<=0) return res.status(400).json({message: "The ID from Orders must be valid!"});
    if(!Number.isInteger(idProduct) || idProduct<=0) return res.status(400).json({message: "The ID from Products must be valid!"});
    if(!Number.isInteger(orderItemAmount) || orderItemAmount<=0) return res.status(400).json({message: "The amount of items must be valid!"});


    try {
        const orderItem = await createOrderItem(idOrders, idProduct, orderItemAmount);
        
        if (!orderItem) return res.status(404).json({message: "Product not found"})

        return res.status(201).json(orderItem);
    }catch(error){
        console.error("Error on creating Order Item: ", error);

        return res.status(500).json({
            message: "Error on creating Order Item"});
    };
};

export async function deleteOrderItemController (req, res){
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});


    try {
        const orderItem = await deleteOrderItem(id);

        if(!orderItem) return res.status(404).json({message: "Order Item not found!"})

        return res.status(204).send();
    }catch(error){
        console.error("Error on deleting Order Item", error);

        return res.status(500).json({
            message: "Error on deleting Order Item"});
    };
};

export async function updateAmountController (req, res){
    const id = Number(req.params.id);
    const amount = Number(req.body.amount);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});
    if (!Number.isInteger(amount) || amount<= 0) return res.status(400).json({message: "The amount of items must be valid!"});

    try {
        const updated = await updateAmount(id, amount);
    
        if (!updated) return res.status(404).json({ message: "Order Item not found" });
        
        return res.status(200).json(updated);
    }catch(error){
        console.error("Error on updating Order Item", error);

        return res.status(500).json({
            message: "Error on updating Order Item"});
    };
};
