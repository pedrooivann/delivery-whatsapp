import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import ProductSearchBar from "../../components/Products/ProductSearchBar/ProductSearchBar.jsx";
import ProductsMenu from "../../components/Products/ProductsMenu/ProductsMenu.jsx";
import ProductList from "../../components/Products/ProductList/ProductList.jsx";

import CategoryList from "../../components/Categories/CategoryList/CategoryList.jsx";
import CategorySearchBar from "../../components/Categories/CategorySearchBar/CategorySearchBar.jsx";

import { useState } from "react";

import './Products.css'
import '../content-section.css';

function Products (){

    const [menu, setMenu] = useState(true);


    return(
        <>
            <div className='outer-layout'>
                <Header></Header>

                    <div className="layout dark">
                        <Sidebar></Sidebar>

                        <section className='content-section dark'>

                            <ProductsMenu
                            menu={menu}
                            setMenu={setMenu}
                            ></ProductsMenu>

                            {menu ?
                            
                            <>
                                <ProductSearchBar/>

                                <hr className="content-section-main-hr"/>


                                <ProductList/>
                            </> 
                            
                            : 
                            
                            <>

                                <CategorySearchBar/>

                                <hr className="content-section-main-hr"/>

                                <CategoryList/>

                            </>}


                            
                        </section>
                    </div>


            </div>
        </>
    )
}

export default Products;