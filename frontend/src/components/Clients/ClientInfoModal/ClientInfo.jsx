import './ClientInfo.css';
import { useState } from 'react';
import { Trash } from 'lucide-react';

function ClientInfo ({client, onDelete, onUpdate}) {

    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState(client.name);
    const [telephone, setTelephone] = useState(client.telephone);
    const [addressLine1, setAddressLine1] = useState(client.address_line1);
    const [neighborhood, setNeighborhood] = useState(client.neighborhood);
    const [addressLine2, setAddressLine2] = useState(client.address_line2);

    const updatedClient  = {
        name: name,
        telephone: telephone, 
        addressLine1 : addressLine1, 
        addressLine2 : addressLine2, 
        neighborhood : neighborhood}
    ;

    
    return (
        <>
        

        <div className="client-info-main-container">

            <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    onUpdate(client.id, updatedClient)
                    setIsEditing(false)
                }} 
                className='client-form'>
        
                <div className='info-container'>
                    
                    <p>Name</p>
                    <textarea 
                    className={`client-info-input ${isEditing? "is-editing-input":""}`}
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
                    className={`client-info-input ${isEditing? "is-editing-input":""}`}
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
                    className={`client-info-input ${isEditing? "is-editing-input":"not"}`}
                    type="text" 
                    value={addressLine1}
                    disabled={!isEditing}
                    onChange={(e)=>setAddressLine1(e.target.value)}
                    />

                </div>
                <hr />

                <div className='info-container'>
                    
                    <p>Neighborhood</p>
                    <input 
                    className={`client-info-input ${isEditing? "is-editing-input":""}`}
                    type="text" 
                    value={neighborhood}
                    disabled={!isEditing}
                    onChange={(e)=>setNeighborhood(e.target.value)}
                    />

                </div>
                <hr />

                <div className='info-container'>
                    
                    <p>Reference</p>
                    <textarea 
                    className={`client-info-input ${isEditing? "is-editing-input":""}`}
                    type="text" 
                    value={addressLine2}
                    disabled={!isEditing}
                    onChange={(e)=>setAddressLine2(e.target.value)}
                    />
                </div>
                <hr />

                <div className='client-buttons-container'>

                        <button 
                        type='button'
                        onClick={()=>onDelete(client.id)} 
                        className='delete-client-button'>
                            <Trash className='delete-client-icon'/>
                        </button>

                        {isEditing && <button className="submit-button" type="submit"  >Save changes</button>}

                        {!isEditing && <button 
                        type='button'
                        onClick={()=>{console.log("Botao clicado"); setIsEditing(prev => !prev)}} 
                        className='edit-client-button'>Edit</button>}
                </div>
            </form>
        </div>
        
        </>
    )
}

export default ClientInfo;