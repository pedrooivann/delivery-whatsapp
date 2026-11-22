import './ProductCard.css';
import { getCategories } from '../../../services/categoriesService';
import { useEffect, useState } from 'react';

import ProductInfoModal from './ProductInfoModal/ProductInfoModal.jsx';

function ProductCard ({product, onUpdate, onDelete}) {

    const [categories, setCategories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

        {isModalOpen && <ProductInfoModal 
            onClose={()=>setIsModalOpen(false)}
            product={product}
            categories={categories}
            onUpdate={onUpdate}
            onDelete={onDelete}
        />}
    
        <div className="product-card">
            
            
            <div className="product-card-info">

                <div className='product-info-container'>
                    <p className='product-tag'>Name: </p>
                    <p className='product-name-p product-p-info'>{product.name}</p>
                </div>

                <div className='product-info-container'>
                    <p className='product-tag'>Description: </p>
                    <p className='product-description-p product-p-info'>{product.description}</p>
                </div>

                <div className='product-info-container'>
                    <p className='product-tag'>Price: </p>
                    <p className='product-price-p product-p-info'>{Number(product.price).toLocaleString("us-EN", 
                        {style: "currency", 
                        currency: "USD"}
                        )}</p>
                </div>

                <div className='product-info-container'>
                    <p className='product-tag'>Category</p>
                    <p className='product-description-p product-p-info'>{getCategoryName(product.id_category)}</p>
                </div>

            </div>

            <div className="product-card-button-div">

                <button className="product-card-button"
                onClick={()=> setIsModalOpen(true)}
                >Open product</button>
            
            </div>
        </div>
    
    
    </>)
}


export default ProductCard;