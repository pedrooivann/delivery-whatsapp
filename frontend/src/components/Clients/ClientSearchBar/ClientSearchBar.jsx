import './ClientSearchbar.css';
import { ArrowDownAZ, ArrowDownZA } from 'lucide-react';
import { useState } from 'react';

import SearchBar from '../../SearchBar/SearchBar.jsx';
import '../../SearchBar/SearchBar.css';

import CreateClientModal from '../CreateClientModal/CreateClientModal.jsx';

function ClientSearchBar({ search, setSearch, setSort, onCreate, sort }) {

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
                            className="general-input searchbar search"
                            placeholder="Search for clients..."
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />

                        
                    </>
                }


                middleContent={
                    <>
                    <button
                            aria-pressed={sort === "AZ"}
                            className={`${sort === "AZ" ? "sorting-az-selected-border " : ""}search-index-button`} 
                            onClick={() => setSort("AZ")}
                        >
                            <ArrowDownAZ className="search-index-icon" />
                        </button>

                        <button
                        aria-pressed={sort === "ZA"}
                            className={`${sort === "ZA" ? "sorting-az-selected-border " : ""}search-index-button`}
                            onClick={() => setSort("ZA")}
                        >
                            <ArrowDownZA className="search-index-icon" />
                        </button>
                    </>}

                rightContent={
                    <button
                        className="general-commit-button general-button create-button"
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