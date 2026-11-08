import './ClientSearchbar.css';
import { ArrowDownAZ, ArrowDownZA } from 'lucide-react';
import Modal from '../Modal/Modal.jsx';
import { useState } from 'react';
import CreateClientModal from '../CreateClientModal/CreateClientModal.jsx';

function ClientSearchBar ({search, setSearch, setSort, onCreate}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        
    <>
        {isModalOpen && <CreateClientModal 
        onClose ={()=> setIsModalOpen(false)}
        onCreate={onCreate}/>}

        <div className='searchbar-div'>

            <div class='left-container'>    
                <input 
                type="text" 
                className='searchbar search'
                placeholder='Search for clients...'
                onChange={(event)=> setSearch(event.target.value)}
                value={search}
                />

                <button className='search-index-button index-az-button' onClick={()=>setSort("AZ")}><ArrowDownAZ className='search-index-icon'/></button>
                <button className='search-index-button index-za-button' onClick={()=>setSort("ZA")}><ArrowDownZA className='search-index-icon'/></button>
            </div>

            <div className='right-container'>
                <button 
                    className='create-button' 
                    onClick={()=>{setIsModalOpen(true)}}
                    >Create client</button>
            </div>    
        </div>
    </>
    )
}

export default ClientSearchBar;