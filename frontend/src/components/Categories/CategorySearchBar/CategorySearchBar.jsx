import SearchBar from "../../SearchBar/SearchBar";
import './CategorySearchbar.css'

function CategorySearchBar () {
    return(<>
        <SearchBar className="category-searchbar"
            leftContent={<>

                <input type="text" />
            
            </>}

        
            rightContent={<></>}
        
        
        />
    
    </>)
    
}

export default CategorySearchBar;