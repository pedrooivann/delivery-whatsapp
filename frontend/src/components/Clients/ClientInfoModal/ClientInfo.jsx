import './ClientInfo.css';
import { useState } from 'react';
import { Trash } from 'lucide-react';

function ClientInfo ({client, onDelete, onUpdate, onClose}) {

    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState(client.name);
    const [telephone, setTelephone] = useState(client.telephone);
    const [addressLine1, setAddressLine1] = useState(client.address_line1);
    const [neighborhood, setNeighborhood] = useState(client.neighborhood);
    const [addressLine2, setAddressLine2] = useState(client.address_line2);

    return (
        <>
        
        <div className="client-main-container">

            <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    onUpdate(
                        client.id,
                        name,
                        telephone,
                        addressLine1,
                        addressLine2,
                        neighborhood
                    )
                    setIsEditing(false)
                    console.log(client)
                    onClose()
                }} 
                className='client-form'>
        
                
                    <p>Name</p>
                    <textarea 
                    required
                    className={`client-info-input ${isEditing? "general-input":"general-info-input"}`}
                    type="text" 
                    value={name}
                    disabled={!isEditing}
                    onChange={(e)=>setName(e.target.value)}
                    />


                
                    <p>Telephone</p>
                    <input
                    required
                    pattern="[0-9]{11}"
                    minLength={11}
                    maxLength={11}
                    className={`client-info-input ${isEditing? "general-input":"general-info-input"}`}
                    type="text" 
                    value={telephone}
                    disabled={!isEditing}
                    onChange={(e)=>setTelephone(e.target.value.replace(/\D/g, ""))}
                    />
        
                

                
                    <p>Address</p>
                    <textarea
                    required 
                    className={`client-info-input ${isEditing? "general-input":"general-info-input"}`}
                    type="text" 
                    value={addressLine1}
                    disabled={!isEditing}
                    onChange={(e)=>setAddressLine1(e.target.value)}
                    />

                

                
                    <p>Neighborhood</p>
                    <input 
                    required
                    className={`client-info-input ${isEditing? "general-input":"general-info-input"}`}
                    type="text" 
                    value={neighborhood}
                    disabled={!isEditing}
                    onChange={(e)=>setNeighborhood(e.target.value)}
                    />


                    <p>Reference</p>
                    <textarea
                    required 
                    className={`client-info-input ${isEditing? "general-input":"general-info-input"}`}
                    type="text" 
                    value={addressLine2}
                    disabled={!isEditing}
                    onChange={(e)=>setAddressLine2(e.target.value)}
                    />


                <div className='buttons-container'>

                        {!isEditing && <button 
                        type='button'
                        onClick={()=>onDelete(client.id)} 
                        className='
                        general-trash-button 
                        client-trash-button'>
                            <Trash className='
                            trash-icon 
                            client-trash-icon'/>
                        </button>}

                        {isEditing && <button
                        onClick={()=>{
                            setName(client.name)
                            setTelephone(client.telephone)
                            setAddressLine1(client.addressLine1)
                            setAddressLine2(client.addressLine2)
                            setNeighborhood(client.neighborhood)
                            setIsEditing(false)
                        }}
                        className='
                        general-button 
                        general-grey-button 
                        client-cancel-button'
                        >Cancel</button>}

                        {isEditing && <button 
                        className="
                        general-button 
                        general-save-button 
                        client-save-button" 
                        type="submit"  >Save</button>}

                        {!isEditing && <button 
                        type='button'
                        onClick={()=>setIsEditing(prev => !prev)} 
                        className='
                        general-grey-button 
                        general-button
                        client-edit-button'>Edit</button>}
                </div>
            </form>
        </div>
        </>
    )
}

export default ClientInfo;