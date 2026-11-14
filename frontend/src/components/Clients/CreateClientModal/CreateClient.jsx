import { useState } from "react";
import './CreateClient.css';

function CreateClient ({onCreate, onClose}){

    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [neighborhood,setNeighborhood] = useState("");
    const [addressLine2, setAddressLine2] = useState("");



    return(
        <>
            <div className="client-main-container">

            <form 
                className='client-form'
                onSubmit={async (e)=>{
                    e.preventDefault()
                    
                    await onCreate(
                        name, 
                        telephone, 
                        addressLine1, 
                        addressLine2, 
                        neighborhood)

                    onClose()
                        }}>
        
                <div className='container'>
                    
                    <p>Name</p>
                    <input
                    placeholder="e.g., John Doe, Jane Doe"
                    className="general-input client-input"
                    type="text" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />

                </div>

                <div className='container'>
                    
                    <p>Telephone</p>
                    <input
                    placeholder="e.g., (99) 1234-5678"
                    maxLength={11}
                    className="general-input client-input" 
                    type="text" 
                    value={telephone}
                    onChange={(e)=>setTelephone(e.target.value)}
                    />
        
                </div>
                

                <div className='container'>
                    
                    <p>Address (street, number)</p>
                    <textarea 
                    maxLength={100}
                    placeholder="e.g., 123 Maple Street, AP 204"
                    className="general-input client-input"
                    type="text" 
                    value={addressLine1}
                    onChange={(e)=>setAddressLine1(e.target.value)}
                    />

                </div>

                <div className='container'>
                    
                    <p>Neighborhood</p>
                    <input
                    placeholder="e.g., Downtown, Midtown, or Oakwood"
                    maxLength={40}
                    className="general-input client-input"
                    type="text" 
                    value={neighborhood}
                    onChange={(e)=>setNeighborhood(e.target.value)}
                    />

                </div>

                <div className='container'>
                    
                    <p>Reference (Location clue, apartment)</p>
                    <textarea 
                    placeholder="e.g., Next to City Park, blue gate, or building name"
                    maxLength={80}
                    className="general-input client-input ref-input"
                    type="text" 
                    value={addressLine2}
                    onChange={(e)=>setAddressLine2(e.target.value)}
                    />
                </div>

                <div className='client-buttons-container'>
                    <button 
                    className="general-commit-button create-button"
                    type="submit"
                    
                        >Create Client</button>

                </div>
            </form>
        </div>
        
        </>
    )
}

export default CreateClient;