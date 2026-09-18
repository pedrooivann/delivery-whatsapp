
CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE client ( 
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    telephone VARCHAR(20) NOT NULL,
    address_line1 VARCHAR(100) NOT NULL,
    address_line2 VARCHAR(100) NOT NULL,
    neighborhood VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    id_category INT NOT NULL,
    name VARCHAR(150)  NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (id_category) 
    REFERENCES category(id) ON DELETE CASCADE
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    id_client INT NOT NULL,
    order_status VARCHAR(20) NOT NULL DEFAULT 'new'
        CHECK (order_status IN (
            'new', 
            'confirmed', 
            'preparing', 
            'ready', 
            'out_for_delivery', 
            'delivered', 
            'canceled')),

    order_origin VARCHAR(20) NOT NULL 
    CHECK ( order_origin IN (
        'whatsapp_bot', 
        'whatsapp_manual')),
    ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_value DECIMAL(10, 2),
    delivery_address VARCHAR(50) NOT NULL,

    FOREIGN KEY (id_client) 
    REFERENCES client(id) ON DELETE CASCADE
);


CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    id_orders INT NOT NULL,
    id_product INT NOT NULL,
    amount INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (id_orders) 
    REFERENCES orders(id) ON DELETE CASCADE,

    FOREIGN KEY (id_product) 
    REFERENCES product(id) ON DELETE CASCADE
);


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    telephone VARCHAR(20) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    hash_password VARCHAR(255) NOT NULL
);