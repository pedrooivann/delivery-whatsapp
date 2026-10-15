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

export async function createProductController (req, res){
    const {name, description, price} = req.body;
    const productPrice = Number(price)
    
    if (typeof name !== "string" || !name.trim()) return res.status(400).json({message: "A valid name is required!"});
    if (typeof description !== "string" || !description.trim()) return res.status(400).json({message: "The description must be valid!"});
    if (!Number.isFinite(productPrice) || productPrice <= 0) return res.status(400).json({message:"The price must be a valid value!"});

    try {
        const product = await createProduct(
            name.trim(), 
            description.trim(), 
            productPrice
        );

        return res.status(201).json(product);
    }catch(error){
        return res.status(500).json({
            error: "Error on creating Product",
            details: error.message});
    };
};

export async function deleteProductController (req, res){
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});

    try {
        const product = await deleteProduct(id);

        if(!product) return res.status(404).json({message: "Product not found!"})

        return res.status(204).send();
    }catch(error){
        return res.status(500).json({
            error: "Error on deleting Product",
            details: error.message});
    };
};

export async function updateProductController (req, res){
    const id = Number(req.params.id);
    const {name, description, price} = req.body;
    const productPrice = Number(price);


    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});
    if (typeof name !== "string" || !name.trim()) return res.status(400).json({message: "A valid name is required!"});
    if (typeof description !== "string" || !description.trim()) return res.status(400).json({message: "The description must be valid!"});
    if (!Number.isFinite(productPrice) || productPrice <= 0) return res.status(400).json({message:"The price must be a valid value!"});

    try {
        const updated = await updateProduct(
            id, 
            name.trim(), 
            description.trim(), 
            productPrice
        );
    
        if (!updated) return res.status(404).json({ 
            message: "Product not found" 
        });
        
        return res.status(200).json(updated);
    }catch(error){
        return res.status(500).json({
            error: "Error on updating Product",
            details: error.message
        });
    };
};