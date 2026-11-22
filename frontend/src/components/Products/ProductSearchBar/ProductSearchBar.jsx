import { Search } from 'lucide-react';
import SearchBar from '../../SearchBar/SearchBar';
import './ProductSearchBar.css'

import ProductFilters from '../ProductFilters/ProductFilters';

import { useState } from 'react';
import CreateProductModal from '../CreateProductModal/CreateProductModal';

function ProductSearchBar ({
    product, 
    categories, 
    onCreate,
    idCategory,
    setIdCategory,
    sortOption,
    setSortOption}){

    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <>
            {isModalOpen && <CreateProductModal 
                onClose={()=>setIsModalOpen(false)}
                onCreate={onCreate}
                product={product}
                categories={categories}/>}

            <SearchBar className="product-searchbar"
            
                    leftContent={
                        <>
                            <input 
                                type="text"
                                className='general-input products-searchbar-input'
                                placeholder='Search for products...'
                                
                                />
                        
                        </>
                    }

                    middleContent = {
                        <>
                            <ProductFilters 
                                setIsFilterOpen={setIsFilterOpen}
                                isFilterOpen={isFilterOpen}
                                
                                categories={categories}
                                idCategory={idCategory}
                                setIdCategory={setIdCategory}
                                

                                sortOption={sortOption}
                                setSortOption={setSortOption}
                                />
        
                        </>
                    }

                    rightContent = {
                        <>
                            <button
                            className='
                            general-button 
                            general-commit-button
                            product-searchbar-commit-button'
                            onClick={()=>{setIsModalOpen(true)
                                console.log("a")}
                            }
                            >Create product</button>
                        </>
                    }
            />
        </>
    )
}

export default ProductSearchBar;