import './OrderItemListCard.css';
import { Eye } from 'lucide-react';


function OrderItemListCard({ item, setIsProductModalOpen }) {
    return (
        <div className="order-item-list-card">
            <div className="order-item-list-card-content">
                <p className="order-item-p-name">{item.name}</p>

                <p className="order-item-p-price">
                    {Number(item.unit_price).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </p>

                <p className="order-item-p-description">
                    {item.description}
                </p>

                <p>Amount: {item.amount}</p>

                <p>
                    Sub: {(item.amount * item.unit_price).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </p>
            </div>

            <button
                className="see-order-item-button"
                onClick={() => setIsProductModalOpen(true)}
            >
                <Eye className="see-order-item-button-icon" />
            </button>
        </div>
    );
}

export default OrderItemListCard;