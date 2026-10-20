import { 
    createOrderItemTransaction, 
    deleteOrderItemTransaction,
    updateAmountTransaction } from '../services/order-items.transaction.service.js';
import { 
    getOrderItem,
    getOrderItems
} from '../services/order-items.service.js';

export async function getOrderItemController (req, res){
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});

    try {
        const orderItem = await getOrderItem(id);
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

    try {
        const orderItems = await getOrderItems();

        return res.status(200).json(orderItems);
    }catch(e){

        console.log(e);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    };
};

export async function createOrderItemController (req, res){

    const id_orders = Number(req.body.id_orders);
    const id_product = Number(req.body.id_product);
    const amount = Number(req.body.amount);
    
    if(!Number.isInteger(id_orders) || id_orders<=0) return res.status(400).json({message: "The ID from Orders must be valid!"});
    if(!Number.isInteger(id_product) || id_product<=0) return res.status(400).json({message: "The ID from Products must be valid!"});
    if(!Number.isInteger(amount) || amount<=0) return res.status(400).json({message: "The amount of items must be valid!"});


    try {
        const orderItem = await createOrderItemTransaction(id_orders, id_product, amount);
        return res.status(201).json(orderItem);
    
    }catch(e){

        console.log(e);

        if(e.message === "ProductNotFound"){
            return res.status(404).json({
                message: "Product not found"
            });
        };  
        
        return res.status(500).json({
            message: "Internal Server Error"});
    };
};


export async function deleteOrderItemController (req, res){
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});


    try {
        await deleteOrderItemTransaction(id);

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

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});
    if (!Number.isInteger(amount) || amount<= 0) return res.status(400).json({message: "The amount of items must be valid!"});

    try {
        const orderItemUpdated = await updateAmountTransaction(id, amount);
        
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
