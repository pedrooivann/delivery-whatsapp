import Modal from './../../../components/Modal/Modal.jsx'
import CreateOrder from './CreateOrder.jsx'

function CreateOrderModal ({onClose, onCreateOrder}){
    return(<>
        <Modal onClose={onClose}>
            <CreateOrder
                onCreateOrder={onCreateOrder}/>

            </Modal>
        
    </>)
}

export default CreateOrderModal