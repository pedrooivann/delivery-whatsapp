import './ClientSearchbar.css';
import { ArrowDownAZ, ArrowDownZA } from 'lucide-react';


function ClientSearchBar ({search, setSearch, setSort}) {


    return (
    <>
        <div className='searchbar-div'>

            <div id='left-container'>    
                <input 
                id='search'
                type="text" 
                className='searchbar'
                placeholder='Search for clients...'
                onChange={(event)=> setSearch(event.target.value)}
                value={search}
                />

                <button id='index-az-button' className='search-index-button' onClick={()=>setSort("AZ")}><ArrowDownAZ className='search-index-icon'/></button>
                <button id='index-za-button' className='search-index-button' onClick={()=>setSort("ZA")}><ArrowDownZA className='search-index-icon'/></button>
            </div>

            <div id='right-container'>
                <button id='create-client'>Create client</button>
            </div>    
        </div>
    </>
    )
}

export default ClientSearchBar;