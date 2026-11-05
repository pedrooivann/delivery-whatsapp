import getClients from '../../services/clientsService.js';
import { useState, useEffect } from 'react';
import ClientCard from '../../components/ClientCard/ClientCard.jsx';
import ClientSearchBar from '../../components/ClientSearchBar/ClientSearchBar.jsx';

import './Clients.css'

function Clients (){

    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("AZ");
    
    const filteredClients = clients.filter((client) => 
        client.name.toLowerCase().includes(search.toLowerCase())
    );

    const sortedClients = [...filteredClients].sort((a, b) => {
    if (sort === "AZ") {
        return a.name.localeCompare(b.name);
    } else {
        return b.name.localeCompare(a.name);
    }
});

    useEffect(()=>{
        async function loadClients(){
            try {
                const data = await getClients();
                setClients(data.clients);
            }catch(e){
                console.error(e)
            };
        };

        loadClients();
    }, []) 
    


    return (
    <section className="clients-list">

        <ClientSearchBar
            search={search}
            setSearch={setSearch}
            sort = {sort}
            setSort = {setSort}
        />

        <hr />

        {sortedClients.map((client) => (
            <ClientCard
                key={client.id_client}
                client={client}
            />
        ))}
    </section>
);

}

export default Clients;