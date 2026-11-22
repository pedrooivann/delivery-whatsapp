import {
    getDeliveryFee
} from '../services/order-settings.service.js'

import { getClient } from "../services/client.service.js";
import { 
    orderOrigin, 
    orderPaymentMethod, 
    orderStatus 
} from '../models/Order.js'

import {
    getOrders,
    getOrder,
    createOrder,
    deleteOrder,
    updateOrderAddress,
    updateOrderStatus,
    updateOrderNotes
} from "../services/order.service.js";

export async function getOrdersController(req, res) {
    try {
        const orders = await getOrders();

        return res.status(200).json({orders});
    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    };
}

export async function getOrderController(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "The ID must be a valid value"
        });
    }

    try {
        const order = await getOrder(id);

        if (!order) {
            return res.status(404).json({
                message: "Order not found!"
            });
        }

        return res.status(200).json({order});
    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    };
}

export async function createOrderController(req, res) {
    const id_client = Number(req.body.id_client);

    const {
        order_origin,
        delivery_address,
        payment_method,
        notes,
        delivery_neighborhood,
        delivery_reference
    } = req.body;

    const selectedOrderOrigin =
        order_origin ?? orderOrigin.WHATSAPP_MANUAL;

    if (!Number.isInteger(id_client) || id_client <= 0) {
        return res.status(400).json({
            message: "Invalid client ID"
        });
    }

    if (!Object.values(orderOrigin).includes(selectedOrderOrigin)) {
        return res.status(400).json({
            message: "Invalid order origin"
        });
    }

    if (!Object.values(orderPaymentMethod).includes(payment_method)) {
        return res.status(400).json({
            message: "Invalid payment method"
        });
    }

    if (
        typeof delivery_address !== 'string' ||
        delivery_address.trim() === ''
    ) {
        return res.status(400).json({
            message: "A valid delivery address is required"
        });
    }

    if (notes != null && typeof notes !== 'string') {
        return res.status(400).json({
            message: "Notes must be a string"
        });
    }

    if (
        delivery_neighborhood != null &&
        typeof delivery_neighborhood !== 'string'
    ) {
        return res.status(400).json({
            message: "Delivery neighborhood must be a string"
        });
    }

    if (
        delivery_reference != null &&
        typeof delivery_reference !== 'string'
    ) {
        return res.status(400).json({
            message: "Delivery reference must be a string"
        });
    }

    try {
        const client = await getClient(id_client);

        if (!client) {
            return res.status(404).json({
                message: "Client not found"
            });
        }

        const { delivery_fee } = await getDeliveryFee();
        const deliveryFee = Number(delivery_fee);

        const createdOrder = await createOrder(
            id_client,
            selectedOrderOrigin,
            delivery_address,
            payment_method,
            notes,
            delivery_neighborhood,
            delivery_reference,
            deliveryFee
        );

        return res.status(201).json({ 
            order: createdOrder });

    } catch (e) {
        console.error(e);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

export async function deleteOrderController (req, res) {
    const id = Number(req.params.id)

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid order ID"
        });
    }

    try {
        const deleted = await deleteOrder(id);

        if(!deleted){
            return res.status(404).json({
                message: "Order not found"
            })
        }
        return res.status(204).send()
    
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }

}

export async function updateOrderAddressController (req, res){
    const id = Number(req.params.id);

    const { 
        delivery_address, 
        delivery_neighborhood, 
        delivery_reference} = req.body


    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid ID"
        });
    }

    if (
        typeof delivery_address !== 'string' ||
        delivery_address.trim() === ''
    ) {
        return res.status(400).json({
            message: "A valid delivery address is required"
        });
    }

    if (
        typeof delivery_neighborhood !== 'string' ||
        delivery_neighborhood.trim() === ''
    ) {
        return res.status(400).json({
            message: "A valid neighborhood is required"
        });
    }

    if (
        delivery_reference != null &&
        typeof delivery_reference !== 'string'
    ) {
        return res.status(400).json({
            message: "Delivery reference must be a string"
        });
    }

    try {
        const editedAddress = await updateOrderAddress(
            id, 
            delivery_address, 
            delivery_neighborhood, 
            delivery_reference
        )

        if(!editedAddress){
            return res.status(404).json({
                message: "Order not found"
            })
        }

        return res.status(200).json({order: editedAddress});
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export async function updateOrderNotesController (req, res) {

    const id = Number(req.params.id)
    const notes = req.body.notes

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid ID"
        });
    }

    if (notes != null && typeof notes !== 'string') {
        return res.status(400).json({
            message: "Notes must be a string"
        });
    }

    try {
        const editedNotes = await updateOrderNotes(id, notes)

        if(!editedNotes){
            return res.status(404).json({
                message: "Order not found"
            })
        }

        return res.status(200).json({
            order: editedNotes
        })

    } catch (e) {
        console.error(e)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export async function updateOrderStatusController (req, res) {
    const id = Number(req.params.id)
    const order_status = req.body.order_status

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid ID"
        });
    }

    if( typeof order_status !== "string" ||
        !Object.values(orderStatus).includes(order_status)
    ){
        return res.status(400).json({
            message: "Invalid order status"
        })
    }


    try {
        const editedStatus = await updateOrderStatus(id, order_status);

        if(!editedStatus){
            return res.status(404).json({
                message: "Order not found"
            })
        }

        return res.status(200).json({
            order: editedStatus
        })
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


