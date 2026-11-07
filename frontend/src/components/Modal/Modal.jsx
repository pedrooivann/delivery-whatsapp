import './Modal.css'
import {X} from 'lucide-react'

function Modal ({onClose, children, modalTitle}) {

    return (
        <>
            <div className='modal-overlay'>    
                <div className='main-container'>
                    <div className='modal-header'>
                        <h3>{modalTitle}</h3>
                        <button className='close-modal-button' onClick={onClose}><X className='close-icon'></X></button>
                    </div>

                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal;

