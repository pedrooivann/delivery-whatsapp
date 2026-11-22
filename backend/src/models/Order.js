class Orders {
    constructor(
        id_client,

        orderStatus,
        orderOrigin,
        orderPaymentStatus,
        
        orderPaymentMethod,
        notes,
        delivery_neighborhood, 
        delivery_reference,

        delivery_fee 
    ) {
        this.id_client = id_client

        this.orderStatus = orderStatus.NEW;
        this.orderOrigin = orderOrigin;
        this.orderPaymentStatus = orderPaymentStatus.PENDING;
        
        this.delivery_fee = delivery_fee;

        this.orderPaymentMethod = orderPaymentMethod;
        this.notes = notes;
        this.delivery_neighborhood = delivery_neighborhood;
        this.delivery_reference = delivery_reference;
    }
}

export const orderStatus = Object.freeze({
    NEW: 'new',
    CONFIRMED: 'confirmed',
    PREPARING: 'preparing',
    READY: 'ready',
    OUT_FOR_DELIVERY: 'out_for_delivery',
    DELIVERED: 'delivered',
    CANCELED: 'canceled'
});

export const orderOrigin = Object.freeze({
    WHATSAPP_BOT: 'whatsapp_bot',
    WHATSAPP_MANUAL:'whatsapp_manual'
});

const orderPaymentStatus = Object.freeze({
    PENDING: 'pending',
    PAID: 'paid',
    FAILED: 'failed',
    REFUNDED: 'refunded'
})

export const orderPaymentMethod = Object.freeze({
    PIX: "pix"
})

export default {
    Orders,
    orderStatus,
    orderOrigin,
    orderPaymentStatus,
    orderPaymentMethod
};

