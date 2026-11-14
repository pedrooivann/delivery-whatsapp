import {
    getClients, 
    deleteClient, 
    createClient, 
    editClient
} from '../../services/clientsService.js';

import { useState, useEffect } from 'react';

import ClientCard from '../../components/Clients/ClientCard/ClientCard.jsx';
import ClientSearchBar from '../../components/Clients/ClientSearchBar/ClientSearchBar.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Header from '../../components/Header/Header.jsx';

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

    async function handleCreate(name, telephone, addressLine1, addressLine2, neighborhood){
        try {
            const newClient = await createClient(name, telephone, addressLine1, addressLine2, neighborhood);
            setClients((clients)=>[...clients, newClient]);
        }catch(e){
            console.error(e)
        }
    }

    async function handleDelete (id) {
        try {
            await deleteClient(id);    
            setClients((prevClients)=> prevClients.filter(client => client.id !== id));
                
        }catch(e){
                console.error(e);
            }
        }   

    async function handleUpdate(id, updatedClient) {
        try {

            const editedClient = await editClient(id, updatedClient);

            console.log("Resposta da API:", editedClient);
            
            setClients(list=> list.map(client=>client.id  === id ? editedClient : client
            ));
            
        }catch(e){
            console.error(e);
        }
    }

    
    


    return (
    
    <>
        <div className='outer-layout'>
            <Header></Header>

            <div className='layout'>
                <Sidebar></Sidebar>
                
                <section className="content-section">

                    <ClientSearchBar 
                        search={search}
                        setSearch={setSearch}
                        sort = {sort}
                        setSort = {setSort}
                        onCreate={handleCreate}
                    />

                    <hr className='content-section-main-hr'/>

                    

                    {sortedClients.map((client) => (
                        <ClientCard
                            key={client.id}
                            client={client}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        />
                        
                    ))}
                    
                </section>
            </div>
        </div>
    </>
);

}

export default Clients;