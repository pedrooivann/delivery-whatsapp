import { useState } from "react";
import './CreateClient.css';

function CreateClient ({onCreate}){

    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [neighborhood,setNeighborhood] = useState("");
    const [addressLine2, setAddressLine2] = useState("");



    return(
        <>
            <div className="client-main-container">

            <form 
                onSubmit={()=>{}} className='client-form'>
        
                <div className='container'>
                    
                    <p>Name</p>
                    <textarea 
                    className="client-input"
                    type="text" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />

                </div>
                <hr/>

                <div className='container'>
                    
                    <p>Telephone</p>
                    <input
                    className="client-input" 
                    type="text" 
                    value={telephone}
                    onChange={(e)=>setTelephone(e.target.value)}
                    />
        
                </div>
                <hr />

                <div className='container'>
                    
                    <p>Address</p>
                    <textarea 
                    className="client-input"
                    type="text" 
                    value={addressLine1}
                    onChange={(e)=>setAddressLine1(e.target.value)}
                    />

                </div>
                <hr />

                <div className='container'>
                    
                    <p>Neighborhood</p>
                    <input 
                    className="client-input"
                    type="text" 
                    value={neighborhood}
                    onChange={(e)=>setNeighborhood(e.target.value)}
                    />

                </div>
                <hr />

                <div className='container'>
                    
                    <p>Reference</p>
                    <textarea 
                    className="client-input"
                    type="text" 
                    value={addressLine2}
                    onChange={(e)=>setAddressLine2(e.target.value)}
                    />
                </div>
                <hr />

                <div className='client-buttons-container'>
                    <button 
                    className="create-button"
                    onClick={()=>{onCreate(
                        name, 
                        telephone, 
                        addressLine1, 
                        addressLine2, 
                        neighborhood
                        )}}>Create Client</button>

                </div>
            </form>
        </div>
        
        </>
    )
}

export default CreateClient;