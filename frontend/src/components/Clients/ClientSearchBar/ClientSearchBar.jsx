import './ClientSearchbar.css';
import { ArrowDownAZ, ArrowDownZA } from 'lucide-react';
import { useState } from 'react';

import SearchBar from '../../SearchBar/SearchBar.jsx';
import '../../SearchBar/SearchBar.css';

import CreateClientModal from '../CreateClientModal/CreateClientModal.jsx';

function ClientSearchBar({ search, setSearch, setSort, onCreate, onDelete }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {isModalOpen && (
                <CreateClientModal
                    onClose={() => setIsModalOpen(false)}
                    onCreate={onCreate}
                />
            )}

            <SearchBar

                leftContent={
                    <>
                        <input
                            type="text"
                            className="searchbar search"
                            placeholder="Search for clients..."
                            onChange={(event) => setSearch(event.target.value)}
                            value={search}
                        />

                        
                    </>
                }


                middleContent={
                    <>
                    <button
                            className="search-index-button index-az-button"
                            onClick={() => setSort("AZ")}
                        >
                            <ArrowDownAZ className="search-index-icon" />
                        </button>

                        <button
                            className="search-index-button index-za-button"
                            onClick={() => setSort("ZA")}
                        >
                            <ArrowDownZA className="search-index-icon" />
                        </button>
                    </>}

                rightContent={
                    <button
                        className="create-button"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Create client
                    </button>
                }

            />
        </>
    );
}

export default ClientSearchBar;