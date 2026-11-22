import { 
    getDeliveryFee, 
    updateDeliveryFee } 
    from "../services/order-settings.service";


export async function getDeliveryFeeController (req, res) {
    try {
        const deliveryFee = await getDeliveryFee();
        return res.status(200).json(deliveryFee)
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    } 
}

export async function updateDeliveryFeeController (req, res){
    const deliveryFeeValue = Number(req.body.delivery_fee)

    if (
        req.body.delivery_fee === undefined ||
        req.body.delivery_fee === null ||
        (typeof req.body.delivery_fee !== "number" &&
        typeof req.body.delivery_fee !== "string") ||
        (typeof req.body.delivery_fee === "string" &&
        !req.body.delivery_fee.trim()) ||
        !Number.isFinite(deliveryFeeValue) ||
        deliveryFeeValue < 0
    ) {
        return res.status(400).json({
            message: "The delivery fee must be a valid non-negative number"
        });
    }
    try {
        const editedDeliveryFee = await updateDeliveryFee(deliveryFeeValue);

        return res.status(200).json(editedDeliveryFee)
    } catch (e) {
        console.error(e);
        return res.status(500).json({message: "Internal Server Error"})
    }
}