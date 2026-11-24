import { useEffect, useState, useRef } from "react";
import { getClients } from "./../../../services/clientsService.js";
import './CreateOrderModal.css'

function CreateOrder (){

    const clientSearchRef = useRef(null);

    const [searchClient, setSearchClient] = useState("")
    const [clients, setClients] = useState([])
    const [selectedClient, setSelectedClient] = useState(null)

    const[isClientSearchOpen, setIsClientSearchOpen] = useState(false)

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                clientSearchRef.current &&
                !clientSearchRef.current.contains(event.target)
            ) {
                setIsClientSearchOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(()=>{
        async function loadClients(){
            try {
                const data = await getClients();
                setClients(data.clients);
            } catch (e) {
                console.error(e)
            }
        } loadClients()
    }, [])

    const filteredClients = clients.filter((client) => (
        client.name.toLowerCase().includes(searchClient.toLowerCase()) ||
        client.telephone.includes(searchClient)
    ))

    return(
    
    <>
    
        <div className="client-search-container" ref={clientSearchRef}>
            <input 
                value={searchClient}
                onClick={()=>setIsClientSearchOpen(true)}
                onChange={(e)=>{
                    setSearchClient(e.target.value);
                    setIsClientSearchOpen(true);
                    setSelectedClient(null);}}
                type="text" 
                className="
                general-input 
                order-client-searchbar" 
            />
            
            <div className="client-result-container">
            
                {isClientSearchOpen &&
                        filteredClients.map((client) => (
                            <p
                                key={client.id}
                                onClick={() => {
                                    setSelectedClient(client);
                                    setSearchClient(client.name);
                                    setIsClientSearchOpen(false);
                                }}
                            >
                                {client.name}<br></br> {client.telephone}
                            </p>
                        ))
                    }
                {isClientSearchOpen && filteredClients.length === 0 && (
                    <p>No clients found.</p>
                )}
            </div>
        
        </div>
        
        <input type="text" className="general-input" />
        
        <input type="text" className="general-input" />
        
        <input type="text" className="general-input" />
        
        <input type="text" className="general-input" />
    </>
    );
}

export default CreateOrder;