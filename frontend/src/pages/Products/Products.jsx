import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import ProductSearchBar from "../../components/Products/ProductSearchBar/ProductSearchBar.jsx";
import ProductsMenu from "../../components/Products/ProductsMenu/ProductsMenu.jsx";
import ProductList from "../../components/Products/ProductList/ProductList.jsx";

import CategoryList from "../../components/Categories/CategoryList/CategoryList.jsx";
import CategorySearchBar from "../../components/Categories/CategorySearchBar/CategorySearchBar.jsx";

import { useState, useEffect } from "react";

import { 
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
} from "../../services/productsService.js";

import { 
    getCategories, 
    createCategory, 
    deleteCategory, 
    updateCategory 
} from "../../services/categoriesService.js";

import './Products.css'
import '../content-section.css';

function Products (){

    
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])

    const [menu, setMenu] = useState(true);

    useEffect(()=>{
            async function loadCategories (){
                try{
                    const data = await getCategories();   
                    setCategories(data);
                }catch(e){
                    console.error(e);
                }   
            } 
            loadCategories(); 
        }, [])

    
    useEffect(()=>{
        async function loadProducts(){
            try {
                const data = await getProducts();
                setProducts(data);
            }catch(e){
                console.error(e)
            }
        }
        loadProducts()
    }, []);

    async function handleCreateCategory(name) {
            try {
                const newCategory = await createCategory(name);
                setCategories(categories=>[...categories, newCategory]);
                
            } catch (e) {
                console.error(e)
            }
        }
    
    async function handleDeleteCategory (id){
        try {
            await deleteCategory(id);

            setCategories(prevCategories => 
                prevCategories.filter(category => 
                    category.id !== id )
                );

        } catch (e) {
            console.error(e);
        }
    }

    async function handleUpdateCategory (id, name){
        try {
            const editedCategory = await updateCategory(id, name);
            setCategories(categories.map(category => category.id === id ? editedCategory : category))
        } catch (e) {
            console.error(e)
        }
    }

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


                                <ProductList products={products}/>
                            </> 
                            
                            : 
                            
                            <>

                                <CategorySearchBar onCreate={handleCreateCategory} />

                                <hr className="content-section-main-hr"/>

                                <CategoryList 
                                    categories={categories}
                                    onDelete={handleDeleteCategory}
                                    onUpdate={handleUpdateCategory}
                                    />

                            </>}


                            
                        </section>
                    </div>


            </div>
        </>
    )
}

export default Products;