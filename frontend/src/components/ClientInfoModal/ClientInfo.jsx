import './ClientInfo.css'

function ClientInfo ({client}) {
    return (
        <>
        <div className="client-info-main-container">

            <div className='info-container'>
                <p>Name</p>
                <input 
                className="client-info-input"
                type="text" 
                value={client.name}
                disabled/>
            </div>

            <div className='info-container'>
                <p>Telephone</p>
                <input
                className="client-info-input" 
                type="text" 
                value={client.telephone}
                disabled/>
            </div>

            <div className='info-container'>
                <p>Address</p>

                <input 
                className="client-info-input"
                type="text" 
                value={client.address_line1}
                disabled/>
            </div>

            <div className='info-container'>
                <p>Neighborhood</p>
                <input 
                className="client-info-input"
                type="text" 
                value={client.neighborhood}
                disabled/>
            </div>

            <div className='info-container'>
                <p>Reference</p>
                <input 
                className="client-info-input"
                type="text" 
                value={client.address_line2}
                disabled/>
            </div>
        </div>
        
        </>
    )
}

export default ClientInfo