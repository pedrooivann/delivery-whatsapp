import './Modal.css'
import {X} from 'lucide-react'

function Modal ({onClose, children, title}) {

    return (
        <>
            <div className='modal-overlay'>    
                <div className='main-container'>
                    <div className='modal-header'>
                        <h3>{title}</h3>
                        <button className='close-modal-button' onClick={onClose}><X className='close-icon'></X></button>
                    </div>

                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal;

