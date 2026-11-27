import { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import CreateOrderModal from "../CreateOrderModal/CreateOrderModal";

function OrderSearchBar ({onClose, onCreateOrder}) {

    const [isModalOpen, setIsModalOpen]= useState(false)

    return(<>

        {isModalOpen && 
            <CreateOrderModal 
                onClose={()=>setIsModalOpen(false)}
                onCreateOrder={onCreateOrder}/>}


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
            
            <button 
            onClick={()=>setIsModalOpen(true)}
            className="
                general-button
                general-commit-button
                create-button"
            >Create order</button>
            </>}
        
        />
    </>)
}

export default OrderSearchBar;