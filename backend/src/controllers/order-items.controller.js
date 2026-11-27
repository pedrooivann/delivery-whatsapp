import {
    createOrderItemsTransaction,
    deleteOrderItemTransaction,
    updateAmountTransaction,
    updateOrderItemTransaction
} from '../services/order-items.transaction.service.js';

    import { 
    getOrderItem,
    getOrderItems
} from '../services/order-items.service.js';

export async function getOrderItemController (req, res){

    
    const id = Number(req.params.id);
    const id_order = Number(req.params.id_order);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});
    if (!Number.isInteger(id_order) || id_order <= 0) return res.status(400).json({message:"The ID must be a valid value!"});

    try {
        const orderItem = await getOrderItem(id, id_order);
        if(!orderItem) return res.status(404).json({message: "Order Item not found"});
        return res.status(200).json(orderItem);
    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    };
};

export async function getOrderItemsController (req, res){
    const id_order = Number(req.params.id_order);
    
    if (!Number.isInteger(id_order) || id_order <= 0) return res.status(400).json({message:"The ID must be a valid value!"});


    try {
        const orderItems = await getOrderItems(id_order);

        return res.status(200).json(orderItems);
    }catch(e){

        console.log(e);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    };
};

export async function createOrderItemsController(req, res) {
    const id_orders = Number(req.params.id_order);
    const items = req.body;

    if (!Number.isInteger(id_orders) || id_orders <= 0) {
        return res.status(400).json({
            message: "Invalid order ID"
        });
    }

    if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({
            message: "Invalid or empty items list"
        });
    }

    for (const item of items) {
        if (!item || typeof item !== "object" || Array.isArray(item)) {
            return res.status(400).json({
                message: "Invalid item format"
            });
        }

        const { id_product, amount } = item;

        if (!Number.isInteger(id_product) || id_product <= 0) {
            return res.status(400).json({
                message: "Invalid product ID"
            });
        }

        if (!Number.isInteger(amount) || amount <= 0) {
            return res.status(400).json({
                message: "Invalid item amount"
            });
        }
    }

    try {
        const result = await createOrderItemsTransaction(
            id_orders,
            items
        );

        return res.status(201).json(result);

    } catch (error) {
        console.error(error);

        if (error.message === "OrderNotFound") {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        if (error.message === "ProductNotFound") {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


export async function deleteOrderItemController (req, res){
    const id_order = Number(req.params.id_order);
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});
    if (!Number.isInteger(id_order) || id_order <= 0) return res.status(400).json({message:"The ID must be a valid value!"});


    try {
        await deleteOrderItemTransaction(id, id_order);

        return res.status(204).send();

    }catch(e){
        
        console.log(e);
        
        if(e.message === "ItemNotFound"){
            return res.status(404).json({
                message: "Item not found"
            });
        };

        return res.status(500).json({
            message: "Internal Server Error"
        });
        
    };
};

export async function updateAmountController (req, res){ 
    const id = Number(req.params.id);
    const amount = Number(req.body.amount);
    const id_orders = Number(req.params.id_order);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});
    if (!Number.isInteger(amount) || amount<= 0) return res.status(400).json({message: "The amount of items must be valid!"});
    if (!Number.isInteger(id_orders) || id_orders <= 0) return res.status(400).json({message:"The Orders ID must be a valid value!"});

    try {
        const orderItemUpdated = await updateAmountTransaction(id, amount, id_orders);
        
        return res.status(200).json(orderItemUpdated);
    }catch(e){

        console.log(e);

        if(e.message === "ItemNotFound"){
            return res.status(404).json({
                message: "Item not found"
            });
        };
        return res.status(500).json({
            message: "Internal Server Error"
        });
    };
};


export async function updateOrderItemController(req, res) {
    const id = Number(req.params.id);
    const id_orders = Number(req.params.id_order);
    const { id_product } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid order item ID"
        });
    }

    if (!Number.isInteger(id_orders) || id_orders <= 0) {
        return res.status(400).json({
            message: "Invalid order ID"
        });
    }

    if (!Number.isInteger(id_product) || id_product <= 0) {
        return res.status(400).json({
            message: "Invalid product ID"
        });
    }

    try {
        const result = await updateOrderItemTransaction(
            id,
            id_orders,
            id_product
        );

        return res.status(200).json(result);

    } catch (error) {
        if (error.message === "ItemOrProductNotFound") {
            return res.status(404).json({
                message: "Order item or product not found"
            });
        }

        console.error(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}