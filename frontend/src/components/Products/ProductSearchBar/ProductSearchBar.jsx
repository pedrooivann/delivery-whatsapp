import { Search } from 'lucide-react';
import { ArrowDownAZ, ArrowDownZA } from 'lucide-react';
import ClientSearchBar from '../../Clients/ClientSearchBar/ClientSearchBar';
import SearchBar from '../../SearchBar/SearchBar';

function ProductSearchBar (){

    return(
        <>
            <SearchBar
            
                    leftContent={
                        <>
                            <input 
                                type="text"
                                className='searchbar search'
                                placeholder='Search for products...'
                                
                                />
                        
                        </>
                    }

                    middleContent = {
                        <>
                        
                        </>
                    }

                    rightContent = {
                        <>
                            <button
                            className='create-button'
                            onClick={()=>{}}
                            >Create product</button>
                        </>
                    }
            />
        </>
    )
}

export default ProductSearchBar;