import { useState } from "react";
import './ClientCard.css'
import {SquarePen } from 'lucide-react'

function ClientCard ({client}){

    return(
        <>
        <div className="client-card dark">
            
            <div className="personal-info">

                <div className="info-div">
                    <h3 className="name-h3">{client.name}</h3>
                    <h3 className="telephone-h3">{client.telephone}</h3>
                </div>

                <div className="address-div">
                    <p>{client.address_line1}</p>
                    <p>{client.neighborhood}</p>
                    <p className="address-reference">{client.address_line2}</p>
                </div>
            </div>
            
            <div className="button-div">
                <button className="client-btn">
                    <SquarePen className="client-btn-icon"/>
                </button>
            </div>

        </div>
        </>
    )
}

export default ClientCard;