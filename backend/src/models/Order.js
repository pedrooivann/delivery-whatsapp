class Orders {
    constructor(OrderOrigin) {
        this.OrderStatus = OrderStatus.NEW;
        this.OrderOrigin = OrderOrigin;
    }
}

const OrderStatus = Object.freeze({
    NEW: 'new',
    CONFIRMED: 'confirmed',
    PREPARING: 'preparing',
    READY: 'ready',
    OUT_FOR_DELIVERY: 'out_for_delivery',
    DELIVERED: 'delivered',
    CANCELED: 'canceled'
});

const OrderOrigin = Object.freeze({
    WHATSAPP_BOT: 'whatsapp_bot',
    WHATSAPP_MANUAL:'whatsapp_manual'
});

export default { //Default, pois na importação os dois serão uma coisa só -> OrderStatus obrigatoriamente acomapanhado de Order
    Orders,
    OrderStatus,
    OrderOrigin
};

//export default -> Importa como objeto unico e nomeavel