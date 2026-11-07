import './ClientInfo.css';
import { useState } from 'react';
import { Trash } from 'lucide-react';

function ClientInfo ({client, onDelete}) {

    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState(client.name);
    const [telephone, setTelephone] = useState(client.telephone);
    const [adressLine1, setAddressLine1] = useState(client.address_line1);
    const [neighborhood, setNeighborhood] = useState(client.neighborhood);
    const [addressLine2, setAddressLine2] = useState(client.address_line2);



    
    return (
        <>
        

        <div className="client-info-main-container">

            <form 
                onSubmit={()=>{}} className='client-form'>
        
                <div className='info-container'>
                    
                    <p>Name</p>
                    <textarea 
                    className="client-info-input"
                    type="text" 
                    value={name}
                    disabled={!isEditing}
                    onChange={(e)=>setName(e.target.value)}
                    />

                </div>
                <hr/>

                <div className='info-container'>
                    
                    <p>Telephone</p>
                    <input
                    className="client-info-input" 
                    type="text" 
                    value={telephone}
                    disabled={!isEditing}
                    onChange={(e)=>setTelephone(e.target.value)}
                    />
        
                </div>
                <hr />

                <div className='info-container'>
                    
                    <p>Address</p>
                    <textarea 
                    className="client-info-input"
                    type="text" 
                    value={adressLine1}
                    disabled={!isEditing}
                    onChange={(e)=>setAddressLine1(e.target.value)}
                    />

                </div>
                <hr />

                <div className='info-container'>
                    
                    <p>Neighborhood</p>
                    <input 
                    className="client-info-input"
                    type="text" 
                    value={neighborhood}
                    disabledisabled={!isEditing}
                    onChange={(e)=>setNeighborhood(e.target.value)}
                    />

                </div>
                <hr />

                <div className='info-container'>
                    
                    <p>Reference</p>
                    <textarea 
                    className="client-info-input"
                    type="text" 
                    value={addressLine2}
                    disabled={!isEditing}
                    onChange={(e)=>setAddressLine2(e.target.value)}
                    />
                </div>
                <hr />

                <div className='client-buttons-container'>

                        <button 
                        onClick={()=>onDelete(client.id)} 
                        className='delete-client-button'>
                            <Trash className='delete-client-icon'/>
                        </button>

                        <button 
                        onClick={()=>{}} 
                        className='edit-client-button'>Edit</button>
                </div>
            </form>
        </div>
        
        </>
    )
}

export default ClientInfo