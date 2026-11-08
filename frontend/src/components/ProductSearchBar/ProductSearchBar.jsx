import { Search } from 'lucide-react';
import { ArrowDownAZ, ArrowDownZA } from 'lucide-react';

function ProductSearchBar (){

    return(
        <>
            <div className="searchbar-div">
                <div className="left-container">
                    <input 
                    type="text"
                    className='searchbar search'
                    placeholder='Search for products...'
                    onChange={()=>{}}
                    value={Search}
                    />
                    
                    <button className='search-index-button index-az-button'><ArrowDownAZ className='search-index-icon'/></button>
                    <button className='search-index-button index-za-button'><ArrowDownZA className='search-index-icon'/></button>
                </div>

                <div className='right-container'>
                    <button
                        className='create-button'
                        >Create product</button>
                </div>
            </div>
        </>
    )
}

export default ProductSearchBar;