class Orders {
    constructor(dateHour, OrdersStatus, OrdersOrigin, totalValue, deliveryAddress) {
        this.dateHour = dateHour;
        this.OrdersStatus = OrdersStatus;
        this.OrdersOrigin = OrdersOrigin;
        this.totalValue = totalValue;
        this.deliveryAddress = deliveryAddress;
    }
}

const OrdersStatus = Object.freeze({
    NEW: 'new',
    CONFIRMED: 'confirmed',
    PREPARING: 'preparing',
    READY: 'ready',
    OUT_FOR_DELIVERY: 'out_for_delivery',
    DELIVERED: 'delivered',
    CANCELED: 'canceled'
});

const OrdersOrigin = Object.freeze({
    WHATSAPP_BOT: 'whatsapp_bot',
    WHATSAPP_MANUAL:'whatsapp_manual'
})

export default { //Default, pois na importação os dois serão uma coisa só -> OrderStatus obrigatoriamente acomapanhado de Order
    Orders,
    OrdersStatus,
    OrdersOrigin
};

//export default -> Importa como objeto unico e nomeavel