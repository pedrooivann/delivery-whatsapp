import {
    getProduct,
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct} from '../services/product.service.js';

export async function getProductController (req, res){
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});

    try {
        const product = await getProduct(id);

        if(!product) return res.status(404).json({message: "Product not found"})

        return res.status(200).json(product);
    }catch(e){
        console.log(e)
        return res.status(500).json({message: "Internal Server Error"});
    };
};

export async function getProductsController (req, res){

    try {
        const products = await getProducts();

        return res.status(200).json(products);
    }catch(e){
        console.log(e)
        return res.status(500).json({message: "Internal Server Error"});
    };
};

export async function createProductController(req, res) {
    const { name, description, price } = req.body;

    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({message: "A valid name is required!"});
    }

    if (typeof description !== "string" || !description.trim()) {
        return res.status(400).json({ message: "The description must be valid!"});
    }

    if (
        (typeof price !== "number" && typeof price !== "string") ||
        (typeof price === "string" && !price.trim())
    ) {
        return res.status(400).json({message: "The price must be a valid value!"});
    }

    const productPrice = Number(price);

    if (!Number.isFinite(productPrice) || productPrice <= 0) {
        return res.status(400).json({message: "The price must be a valid value!"});
    }

    try {
        const product = await createProduct(
            name.trim(),
            description.trim(),
            productPrice
        );

        return res.status(201).json(product);
    } catch (e) {

        console.log(e);

        return res.status(500).json({message: "Internal Server Error"});
    }
}

export async function deleteProductController (req, res){
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});

    try {
        const product = await deleteProduct(id);

        if(!product) return res.status(404).json({message: "Product not found!"})

        return res.status(204).send();
    } catch (e) {
        console.log(e);

        if (e.code === "23503" && e.constraint === "order_items_id_product_fkey") {
        
            return res.status(409).json({
                message: "Cannot delete a product associated with orders."
            });
        }   

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export async function updateProductController(req, res) {
    const id = Number(req.params.id);
    const { name, description, price } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({message: "The ID must be a valid value!"});
    }

    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({message: "A valid name is required!"});
    }

    if (typeof description !== "string" || !description.trim()) {
        return res.status(400).json({message: "The description must be valid!"});
    }

    if (
        (typeof price !== "number" && typeof price !== "string") ||
        (typeof price === "string" && !price.trim())
    ) {
        return res.status(400).json({message: "The price must be a valid value!"});
    }

    const productPrice = Number(price);

    if (!Number.isFinite(productPrice) || productPrice <= 0) {
        return res.status(400).json({message: "The price must be a valid value!"});
    }

    try {
        const updated = await updateProduct(
            id,
            name.trim(),
            description.trim(),
            productPrice
        );

        if (!updated) {
            return res.status(404).json({message: "Product not found!"});
        }

        return res.status(200).json(updated);

    } catch (e) {
        console.log(e);
        return res.status(500).json({message: "Internal Server Error"});
    }
}
