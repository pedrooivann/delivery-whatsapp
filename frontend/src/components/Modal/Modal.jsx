import './Modal.css'
import {X} from 'lucide-react'

function Modal ({onClose, children}) {

    return (
        <>
            <div className='modal-overlay'>    
                <div className='main-container'>
                    <div className='modal-header'>
                        <button className='close-modal-button' onClick={onClose}><X className='close-icon'></X></button>
                    </div>

                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal;

