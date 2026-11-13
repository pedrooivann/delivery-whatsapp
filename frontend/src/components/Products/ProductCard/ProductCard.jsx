import './ProductCard.css';
import { getCategories } from '../../../services/categoriesService';
import { useEffect, useState } from 'react';

import ProductInforModal from '../ProductInfoModal/ProducInfoModal.jsx';

function ProductCard ({product}) {

    const [categories, setCategories] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();

    useEffect(()=>{
        async function loadCategories() {
            try{
                const data = await getCategories();
                setCategories(data);
            }catch(e){
                console.error(e);
            }
        } 
        loadCategories();
    }, []);
    




    function getCategoryName (id){
        const category = categories.find(cat => cat.id === id)
        return category?.name || "Loading..";
    }

    

    return(<>

        {selectedProduct && <ProductInforModal 
            onclose={onClose}
            product={product}
        />}
    
        <div className="product-card">
            
            <div className="product-card-info">

                <div className='product-info-container'>
                    <p className='product-tag'>Name: </p>
                    <p className='product-name-p'>{product.name}</p>
                </div>

                <div className='product-info-container'>
                    <p className='product-tag'>Description: </p>
                    <p className='product-description-p'>{product.description}</p>
                </div>

                <div className='product-info-container'>
                    <p className='product-tag'>Price: </p>
                    <p className='product-price-p'>${product.price}</p>
                </div>

                <div className='product-info-container'>
                    <p className='product-tag'>Category</p>
                    <p>{getCategoryName(product.id_category)}</p>
                </div>

            </div>

            <div className="product-card-button-div">

                <button className="product-card-button"
                onClick={()=> setSelectedProduct(product)}
                >Open product</button>
            
            </div>
        </div>
    
    
    </>)
}


export default ProductCard;