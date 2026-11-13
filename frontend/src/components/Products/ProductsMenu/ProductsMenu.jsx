import './ProductsMenu.css';
import { useState } from 'react';




function ProductsMenu ({menu, setMenu}) {


    return (
        <>
            <div className="products-menu-container">

                <button className={`nav-buttons ${menu? "selected-color":"not-selected-color"}`} onClick={()=>{setMenu(true)}}>Products</button>
                <button className={`nav-buttons ${!menu? "selected-color":"not-selected-color"}`} onClick={()=>{setMenu(false)}}>Categories</button>
            </div>
        
        </>
    )
}

export default ProductsMenu;