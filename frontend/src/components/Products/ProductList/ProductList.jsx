import ProductCard from '../ProductCard/ProductCard.jsx';
import './ProductList.css';

function ProductList ({
    products, 
    onUpdate, 
    onDelete,

    sortOption,
    sortIdCategory}) {

        const filteredCategoryProducts = [...products].filter(    product =>
        sortIdCategory === "" ||
        product.id_category === Number(sortIdCategory))

        const sortedProducts = [...filteredCategoryProducts].sort((a, b)=>{
            
            if(sortOption === "low"){
                const priceSortedItem = a.price - b.price;
                return priceSortedItem;
            }
            if(sortOption === "high"){
                const priceSortedItem = b.price - a.price;
                return priceSortedItem;
            }
            if(sortOption === "az"){
                const nameSortedItem = a.name.localeCompare(b.name);
                return nameSortedItem;
            }
            if(sortOption === "za"){
                const nameSortedItem = b.name.localeCompare(a.name);
                return nameSortedItem;
            }
        })
        
        console.log("Selection: ", sortOption);
        console.log("ReturnedArray: ", sortedProducts);
    
    return (<>


        <section className='product-list-section'>

            {sortedProducts.map((product)=>(
                
                
                <ProductCard
                    key={product.id}
                    product={product}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </section>
    </>)
}

export default ProductList;