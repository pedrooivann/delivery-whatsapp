import { useEffect, useState } from 'react';
import getProducts from '../../../services/productsService.js';
import ProductCard from '../ProductCard/ProductCard.jsx';
import './ProductList.css';

function ProductList () {

    const [products, setProducts] = useState([])

                console.log(products)

    
    useEffect(()=>{
        async function loadProducts(){
            try {
                const data = await getProducts();
                setProducts(data.products);
            }catch(e){
                console.error(e)
            }
        }
        loadProducts()
    }, []);



    return (<>

        <section className='product-list-section'>

            {products.map((product)=>(
                
                
                <ProductCard
                    key={product.id}
                    product={product}
                    
                />
            ))}
        </section>
    </>)
}

export default ProductList;