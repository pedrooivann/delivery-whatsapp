import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import ProductSearchBar from "../../components/ProductSearchBar/ProductSearchBar.jsx";

import './Products.css'

function Products (){
    return(
        <>
            <div className='outer-layout'>
                <Header></Header>

                    <div className="layout">
                        <Sidebar></Sidebar>

                        <section className='section-products'>
                            <ProductSearchBar></ProductSearchBar>
                        </section>
                    </div>


            </div>
        </>
    )
}

export default Products;