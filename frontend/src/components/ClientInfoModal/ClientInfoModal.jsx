import Modal from "../Modal/Modal.jsx"
import ClientInfo from "./ClientInfo.jsx";

function ClientInfoModal ({onClose, client}){
    return (
        <>
            <Modal onClose={onClose}>
                <ClientInfo client={client}/>
            </Modal>
        </>
    )
}

export default ClientInfoModal;