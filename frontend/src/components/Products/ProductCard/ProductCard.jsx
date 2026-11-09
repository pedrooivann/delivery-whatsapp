

function ProductCard ({product}) {
    return(<>
    
        <div className="product-card">
            
            <div className="product-card-info">

                <p>{product.id}</p>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>

            </div>

            <div className="product-card-button-div">

                <button className="product-card-button">

                </button>
            
            
            </div>



        </div>
    
    
    </>)
}