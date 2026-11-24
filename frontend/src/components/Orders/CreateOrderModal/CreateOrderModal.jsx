import Modal from './../../../components/Modal/Modal.jsx'
import CreateOrder from './CreateOrder.jsx'

function CreateOrderModal ({onClose}){
    return(<>
        <Modal onClose={onClose}>
            <CreateOrder/>

            </Modal>
        
    </>)
}

export default CreateOrderModal