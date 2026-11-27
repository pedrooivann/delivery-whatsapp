import { useEffect, useState, useRef } from "react";
import { getClients } from "./../../../services/clientsService.js";
import { getProducts } from './../../../services/productsService.js';
import OrderItemListCard from "../OrderItemListCard/OrderItemListCard.jsx";


import './CreateOrderModal.css'
import './../../../pages/Orders/Order.css'
import { createOrderItemsService } from "../../../services/order-itemsService.js";

function CreateOrder ({onCreateOrder}){

    const [isProductModalOpen, setIsProductModalOpen] = useState(false)

    const [productList, setProductList] = useState([]);

    const [products, setProducts] = useState([])
    const [isProductSearchOpen, setIsProductSearchOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [searchProduct, setSearchProduct] = useState('')
    const [productAmount, setProductAmount] = useState(1)

    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [deliveryNeighborhood, setDeliveryNeighborhood] = useState("");
    const [deliveryReference, setDeliveryReference] = useState("");
    
    const [notes, setNotes] = useState('')

    const clientSearchRef = useRef(null);
    const productSearchRef = useRef(null);

    
    const [searchClient, setSearchClient] = useState("")
    const [clients, setClients] = useState([])
    const [selectedClient, setSelectedClient] = useState(null)

    const [isClientSearchOpen, setIsClientSearchOpen] = useState(false)

    const [useClientAddress, setUseClientAddress] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                clientSearchRef.current &&
                !clientSearchRef.current.contains(event.target)
            ) {
                setIsClientSearchOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                productSearchRef.current &&
                !productSearchRef.current.contains(event.target)
            ) {
                setIsProductSearchOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (useClientAddress && selectedClient) {
            setDeliveryAddress(selectedClient.address_line1);
            setDeliveryNeighborhood(selectedClient.neighborhood);
            setDeliveryReference(selectedClient.address_line2);
        }
    }, [selectedClient, useClientAddress]); 


    useEffect(()=> {
        async function loadProducts (){
            try {
                const data = await getProducts();
                setProducts(data)
            } catch (e) {
                console.error(e);
            }
        } loadProducts()
    }, [])

    useEffect(()=>{
        async function loadClients(){
            try {
                const data = await getClients();
                setClients(data.clients);
            } catch (e) {
                console.error(e)
            }
        } loadClients()
    }, [])

    const filteredClients = clients.filter((client) => (
        client.name.toLowerCase().includes(searchClient.toLowerCase()) ||
        client.telephone.includes(searchClient)
    ))

    const filteredProducts = products.filter((product)=> (
        product.name.toLowerCase().includes((searchProduct.toLowerCase())) ||
        product.description.toLowerCase().includes((searchProduct.toLowerCase()))
    ))

    async function handleSubmitOrder(e) {
        e.preventDefault();

        if (!selectedClient) {
            alert("Select a client.");
            return;
        }

        if (productList.length === 0) {
            alert("Add at least one product.");
            return;
        }

        try {
            const newOrder = await onCreateOrder(
                selectedClient.id,
                "whatsapp_manual",
                deliveryAddress,
                "pix",
                notes,
                deliveryNeighborhood,
                deliveryReference
            );

            const items = productList.map(item => ({
                id_product: item.id_product,
                amount: item.amount
            }));

            await createOrderItemsService(
                newOrder.id,
                items);

        } catch (error) {
            console.error("Error creating order:", error);
        }
    }

    function calcOrderTotal() {
        const total = productList.reduce((sum, product) => {
            const totalProd = product.amount * product.unit_price;

            return sum + totalProd;
        }, 0);

        return total;
    }


    function handleInsertItemList() {
        if (!selectedProduct || productAmount <= 0) return;

        const newItem = {
            localItemID: crypto.randomUUID(),
            id_product: selectedProduct.id,
            name: selectedProduct.name,
            description: selectedProduct.description,
            amount: Number(productAmount),
            unit_price: Number(selectedProduct.price)
        };

        setProductList((oldList) => [...oldList, newItem]);

        setProductAmount(1);
        setSelectedProduct(null);
        setSearchProduct('');
    }


    

    function handleUseClientAddress(checked) {
    setUseClientAddress(checked);

    if (checked && selectedClient) {
        setDeliveryAddress(selectedClient.address_line1);
        setDeliveryNeighborhood(selectedClient.neighborhood);
        setDeliveryReference(selectedClient.address_line2);
    } else {
        setDeliveryAddress("");
        setDeliveryNeighborhood("");
        setDeliveryReference("");
    }
    }

    return(
    
    <>
        <form 
            className="create-order-form"
            onSubmit={handleSubmitOrder}>

            <div className="create-order-checkbox-container">
                <p>Use client address</p>
                <input 
                    type="checkbox"
                    checked={useClientAddress}
                    onChange={(e) => handleUseClientAddress(e.target.checked)}
                    className="order-address-checkbox"/>
            </div>
            <div className="
                client-search-container  
                order-client-search-container" ref={clientSearchRef}>
                <p>Client</p>
                <input
                    required
                    placeholder="Search for a client..."
                    value={searchClient}
                    onClick={()=>setIsClientSearchOpen(true)}
                    onChange={(e)=>{
                        setSearchClient(e.target.value);
                        setIsClientSearchOpen(true);
                        setSelectedClient(null);}}
                    type="text" 
                    className="
                    general-input 
                    order-client-searchbar" 
                />
                
                
                <div className="
                    result-container 
                    client-result-container">
                    {isClientSearchOpen &&
                            filteredClients.map((client) => (

                                <p
                                    key={client.id}
                                    onClick={() => {
                                        setSelectedClient(client);
                                        setSearchClient(client.name);
                                        setIsClientSearchOpen(false);
                                    }}
                                >
                                    {client.name}<br></br> {client.telephone}
                                </p>
                            ))
                        }
                    {isClientSearchOpen && filteredClients.length === 0 && (
                        <p>No clients found.</p>
                    )}
                </div>
            </div>
            
            <p>Address</p>
            <input 
                required
                placeholder="e.g., 123 Maple Street, AP 204"
                type="text"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                disabled={useClientAddress}
                className="general-input"/>
            
            <p>Neighborhood</p>
            <input 
                required
                placeholder="e.g., Downtown, Midtown, or Oakwood"
                type="text"
                value={deliveryNeighborhood}
                onChange={(e) => setDeliveryNeighborhood(e.target.value)}
                disabled={useClientAddress}
                className="general-input"/>
            
            <p>Reference (Location clue, apartment)</p>
            <input 
                placeholder="e.g., Next to City Park, blue gate, or building name"
                type="text"
                value={deliveryReference}
                onChange={(e) => setDeliveryReference(e.target.value)}
                disabled={useClientAddress}
                className="general-input"/>

            <hr className="create-order-hr"/>

            <div className="order-cart-container">
                <div className="order-cart-header">
                    
                    <div className="product-search-container" >
                        <input 
                        
                        type="text"
                        placeholder="Search for products..."
                        value={searchProduct}
                        onClick={()=>setIsProductSearchOpen(true)}
                        onChange={(e)=>{
                            setSearchProduct(e.target.value);
                            setIsProductSearchOpen(true);
                            setSelectedProduct(null);
                        }}
                        className="
                            general-input
                            order-item-searchbar
                            "/>
                        
                        <div className="result-container" ref={productSearchRef}>
                            {isProductSearchOpen &&
                                filteredProducts.map((product)=> (
                                    <p
                                        key={product.id}
                                        onClick={()=> {
                                            setSelectedProduct(product);
                                            setSearchProduct(product.name);
                                            setIsProductSearchOpen(false);
                                        }}
                                    >
                                        {product.name} {product.price} {product.description}
                                    </p>
                                ))
                            }
                        {isProductSearchOpen && filteredProducts.length === 0 && (
                            <p>No products found.</p>
                        )}
                        </div>
                    
                    </div>
                
                
                <input
                    placeholder="Amount..."
                    type="number"
                    min="1"
                    step="1"
                    value={productAmount}
                    onChange={(e) => setProductAmount(e.target.value)}
                    className="general-input order-item-amount-input"
                />
                

                <button
                    type="button"
                    onClick={handleInsertItemList}
                    className="
                        general-button 
                        general-commit-button 
                        order-create-item-button"
                    >
                    Add
                </button>
                
                </div>
        
                <div className="order-cart-list">
                        {productList.map((item)=>(
                            
                            <OrderItemListCard 
                                key={item.localItemID}
                                item={item}
                                setIsProductModalOpen={setIsProductModalOpen}/>
                        ))}

                </div>

                <div className="order-cart-footer">
                        <h3>Total: {calcOrderTotal().toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                            })}
                        </h3>

                </div>
            </div>

            
            
            <p>Order notes</p>
            <textarea 
                placeholder="Notes..."
                type="text" 
                className="general-input create-order-notes"
                onChange={(e)=>setNotes(e.target.value)}
                value={notes}/>

            <div className='buttons-container'>
                    <button 
                    
                    className="
                        general-button 
                        general-commit-button 
                        create-button"
                    type="submit"
                        >Create Order</button>
            </div>
        </form>
    </>
    );
}

export default CreateOrder;