import SearchBar from "../../SearchBar/SearchBar";

function OrderSearchBar () {
    return(<>
        <SearchBar
            leftContent={<>

                <input 
                type="text"
                className="general-input searchbar search"
                placeholder="Search for Orders..."

                />
            
            </>}
        
            middleContent={<>
            
            
            </>}

            rightContent={<>
            
            <button className="
            general-button
            general-commit-button
            create-button"
            >Create order</button>
            </>}
        
        />
    </>)
}

export default OrderSearchBar;