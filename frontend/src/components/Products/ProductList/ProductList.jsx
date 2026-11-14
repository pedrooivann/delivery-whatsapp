import ProductCard from '../ProductCard/ProductCard.jsx';
import './ProductList.css';

function ProductList ({products}) {


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