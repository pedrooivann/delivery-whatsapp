class Order {
    constructor(dateHour, status, origin, totalValue, deliveryAddress) {
        this.dateHour = dateHour;
        this.status = status;
        this.origin = origin;
        this.totalValue = totalValue;
        this.deliveryAddress = deliveryAddress;
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

export default { //Default, pois na importação os dois serão uma coisa só -> OrderStatus obrigatoriamente acomapanhado de Order
    Order,
    OrderStatus
};

//export default -> Importa como objeto unico e nomeavel