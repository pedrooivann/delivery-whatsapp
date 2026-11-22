import SearchBar from "../../SearchBar/SearchBar";
import CreateCategoryModal from "../CreateCategoryModal/CreateCategoryModal";
import './CategorySearchbar.css'
import { useState } from 'react';



function CategorySearchBar ({onCreate, setSearchCategory, searchCategory}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return(<>

        {isModalOpen && <CreateCategoryModal 
            onClose={()=>setIsModalOpen(false)}
            onCreate={onCreate}/>}

        <SearchBar className="category-searchbar"

            leftContent={<>

                <input 
                type="text"
                className="general-input searchbar search"
                placeholder="Search for categories..."
                onChange={(e)=>(setSearchCategory(e.target.value))}
                value={searchCategory}/>
            
            </>}

        
            rightContent = {<>
                <button 
                    className="
                        general-button
                        general-commit-button
                        category-searchbar-commit-button"
                    onClick={()=>setIsModalOpen(true)}>Create category</button>
        
            </>}
        
        
        />
    
    </>)
    
}

export default CategorySearchBar;