
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    telephone VARCHAR(20) NOT NULL,
    hash_password VARCHAR(255) NOT NULL
);

CREATE TABLE client (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    telephone INT(11),
    address VARCHAR(50),
    createdAt DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_status ('new', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered', 'canceled'),
    order_origin ('whatsapp_bot', 'whatsapp_manual'),
    total_value DECIMAL(10, 2),
    delivery_address VARCHAR(50)
)