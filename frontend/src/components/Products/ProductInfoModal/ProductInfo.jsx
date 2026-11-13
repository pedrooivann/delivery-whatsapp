import { useState } from 'react';

function ProductInfo ({product}) {

    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    return(<>
        <div className="info-container">

            <form action="">

                <p>Product name</p>
                <input 
                    type="text" 
                    name="" 
                    id="" />
                
                <p>Description</p>
                <textarea 
                        name="" 
                        id=""></textarea>

                <p>Price</p>
                <input 
                    type="text" 
                    name="" 
                    id="" />

            </form>

        </div>
    
    
    </>)
}


export default ProductInfo;