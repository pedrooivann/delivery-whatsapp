
import {
    getOrders,
    getOrder,
    createOrder,
    deleteOrder,
    updateOrderStatus,
    updateOrderAddress
} from "../services/order.service.js";

export async function getOrdersController(req, res) {
    try {
        const orders = await getOrders();

        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({
            error: "Error on getting Orders",
            details: error.message
        });
    }
}

export async function getOrderController(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "The ID must be a valid value!"
        });
    }

    try {
        const order = await getOrder(id);

        if (!order) {
            return res.status(404).json({
                message: "Order not found!"
            });
        }

        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({
            error: "Error on getting Order",
            details: error.message
        });
    }
}

export async function createOrderController(req, res) {
    const { id_client, origin, delivery_address } = req.body;

    const idClient = Number(id_client);
    const validOrigins = ["whatsapp_bot", "whatsapp_manual"];

    if (!Number.isInteger(idClient) || idClient <= 0) {
        return res.status(400).json({
            message: "The client ID must be a valid value!"
        });
    }

    if (origin !== undefined && !validOrigins.includes(origin)) {
        return res.status(400).json({
            message: "The origin must be valid!"
        });
    }

    if (
        delivery_address !== undefined &&
        (typeof delivery_address !== "string" || !delivery_address.trim())
    ) {
        return res.status(400).json({
            message: "The delivery address must be valid!"
        });
    }

    try {
        const order = await createOrder(
            idClient,
            origin ?? "whatsapp_manual",
            delivery_address?.trim() ?? null
        );

        return res.status(201).json(order);
    } catch (error) {
        return res.status(500).json({
            error: "Error on creating Order",
            details: error.message
        });
    }
}

export async function deleteOrderController(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "The ID must be a valid value!"
        });
    }

    try {
        const order = await deleteOrder(id);

        if (!order) {
            return res.status(404).json({
                message: "Order not found!"
            });
        }

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            error: "Error on deleting Order",
            details: error.message
        });
    }
}

export async function updateOrderStatusController(req, res) {
    const id = Number(req.params.id);
    const { order_status } = req.body;

    const validStatuses = [
        "new",
        "confirmed",
        "preparing",
        "ready",
        "out_for_delivery",
        "delivered",
        "canceled"
    ];

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "The ID must be a valid value!"
        });
    }

    if (typeof order_status !== "string" || !validStatuses.includes(order_status)) {
        return res.status(400).json({
            message: "The order status must be valid!"
        });
    }

    try {
        const updated = await updateOrderStatus(id, order_status);

        if (!updated) {
            return res.status(404).json({
                message: "Order not found!"
            });
        }

        return res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({
            error: "Error on updating Order status",
            details: error.message
        });
    }
}

export async function updateOrderAddressController(req, res) {
    const id = Number(req.params.id);
    const { delivery_address } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "The ID must be a valid value!"
        });
    }

    if (typeof delivery_address !== "string" || !delivery_address.trim()) {
        return res.status(400).json({
            message: "The delivery address must be valid!"
        });
    }

    try {
        const updated = await updateOrderAddress(id, delivery_address.trim());

        if (!updated) {
            return res.status(404).json({
                message: "Order not found!"
            });
        }

        return res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({
            error: "Error on updating Order address",
            details: error.message
        });
    }
}
