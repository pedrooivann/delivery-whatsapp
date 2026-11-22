import './ProductFilters.css'

function ProductFilters ({
    isFilterOpen,
    setIsFilterOpen,

    categories, 
    idCategory, 
    setIdCategory,

    sortOption,
    setSortOption
    }){


    return(<>

    <div className='filter-dropdown-container'>
                                
            <button
                aria-expanded={isFilterOpen}
                type="button"
                className={`${isFilterOpen? "client-filter-dropdown-button-active " : "client-filter-dropdown-button " }general-button general-dropdown-button `}
                onClick={() => setIsFilterOpen(prev => !prev)}
                >
                Filters
            </button>

        {isFilterOpen && <div className='show-content-container'>
            <div className='filter-group'>
                <p>Order by price</p>

                <label>
                    <input 
                        type="radio" 
                        name='sort' 
                        value="low" 
                        checked={sortOption === "low"}
                        onChange={(e)=>setSortOption(e.target.value)}/>
                    Lowest to Highest
                </label>

                <label>
                    <input 
                        type="radio" 
                        name='sort' 
                        value="high" 
                        checked={sortOption === "high"}
                        onChange={(e)=>setSortOption(e.target.value)}/>
                    Highest to Lowest
                </label>
            </div>


            <div className='filter-group'>
                <p>Order by name</p>

                <label>
                    <input 
                    type="radio" 
                    name='sort' 
                    value="az"
                    checked={sortOption === "az"}
                    onChange={(e)=>setSortOption(e.target.value)}/>
                    A-Z
                </label>

                <label>
                    <input type="radio" 
                    name='sort' 
                    value="za"
                    checked={sortOption === "za"}
                    onChange={(e)=>setSortOption(e.target.value)}/>
                    Z-A
                </label>
            </div>
            <div className='filter-group'>
                <select
                    value={idCategory}
                    className="general-select general-input"
                    onChange={(e)=>setIdCategory(e.target.value)}>
                    
                    <option value="">
                        All categories
                    </option>
                    
                    {categories.map((category)=>(
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                        ))
                    }
                </select>
            </div>
        </div>}
        
        </div>
    </>)
}

export default ProductFilters;