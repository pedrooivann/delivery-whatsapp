import SearchBar from "../../SearchBar/SearchBar";
import CreateCategoryModal from "../CreateCategoryModal/CreateCategoryModal";
import CategoryInfoModal from "../CreateCategoryModal/CreateCategoryModal";
import './CategorySearchbar.css'
import { useState } from 'react';

function CategorySearchBar ({onCreate}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return(<>

        {isModalOpen && <CreateCategoryModal 
            onClose={()=>setIsModalOpen(false)}
            onCreate={onCreate}/>}

        <SearchBar className="category-searchbar"

            leftContent={<>

                <input 
                type="text"
                className="searchbar search"
                placeholder="Search for categories..."
                onChange={(e)=>(e.target.value)}
                value={()=>{}}/>
            
            </>}

        
            rightContent = {<>
                <button 
                    className="create-button"
                    onClick={()=>setIsModalOpen(true)}>Create category</button>
        
            </>}
        
        
        />
    
    </>)
    
}

export default CategorySearchBar;